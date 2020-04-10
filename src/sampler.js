import { midiToPitch } from './music'
import { pitches } from './constants'
import samples from './samples'

export default async (env, inst) => {
  const buffers = {}
  const sampleMap = samples[inst]

  await Promise.all(
    Object.keys(sampleMap).map((pitch) =>
      window
        .fetch(sampleMap[pitch].path)
        .then((response) => response.arrayBuffer())
        .then((arrayBuffer) => env.context.decodeAudioData(arrayBuffer))
        .then((buffer) => {
          buffers[pitch] = {
            buffer,
            ...sampleMap[pitch],
          }
        })
    )
  )

  return (note) => {
    return new Promise((resolve) => {
      const now = env.now()
      const pitch = midiToPitch(note[0])
      const duration = note[1]
      // const volume = state.note[2] || 80
      const volume = 1

      if (note[0] === pitches.rest) {
        let osc = env.context.createOscillator()
        osc.onended = () => {
          resolve()
        }
        osc.start(now)
        osc.stop(now + duration)
        osc = null
      } else {
        const buffer = buffers[pitch].buffer

        let sourceNode = env.context.createBufferSource()
        let gainNode = env.context.createGain()

        sourceNode.buffer = buffer

        // TODO: Scale sample duration by playback rate (buffer.duration * playbackRate)
        sourceNode.playbackRate.value = buffers[pitch].playbackRate

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.setValueAtTime(volume, now)
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          now + duration
          // now + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        // gainNode.connect(context.destination)
        // output.connect(gainNode)
        gainNode.connect(env.bus())
        // env.connect(gainNode)

        sourceNode.start(now)
        // sourceNode.stop(now + Math.min(duration, buffer.duration))
        sourceNode.stop(now + duration)

        sourceNode.onended = () => {
          resolve()
        }

        sourceNode = null
        gainNode = null
      }
    })
  }
}
