import env from './env'
import { midiToPitch } from './music'
import { pitches } from './constants'
import samples from './samples'

export default async inst => {
  const buffers = {}
  const sampleMap = samples[inst]

  await Promise.all(
    Object.keys(sampleMap).map(pitch =>
      window
        .fetch(sampleMap[pitch].path)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => env.context.decodeAudioData(arrayBuffer))
        .then(buffer => {
          buffers[pitch] = {
            buffer,
            ...sampleMap[pitch],
          }
        })
    )
  )

  return (state, next) => {
    const now = env.now()
    const context = env.context
    const note = midiToPitch(state.note[0])
    const duration = state.note[1]
    // const volume = state.note[2] || 80
    const volume = 1

    if (state.note) {
      if (state.note[0] === pitches.rest) {
        let osc = context.createOscillator()
        osc.onended = () => {
          next()
        }
        osc.start(now)
        osc.stop(now + duration)
        osc = null
      } else {
        const buffer = buffers[note].buffer

        let sourceNode = context.createBufferSource()
        let gainNode = context.createGain()

        sourceNode.buffer = buffer
        sourceNode.playbackRate.value = buffers[note].playbackRate

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.setValueAtTime(volume, now)
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          now + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(context.destination)

        sourceNode.start(now)
        sourceNode.stop(now + Math.min(duration, buffer.duration))

        sourceNode.onended = () => {
          next()
        }

        sourceNode = null
        gainNode = null
      }
    } else {
      next()
    }
  }
}
