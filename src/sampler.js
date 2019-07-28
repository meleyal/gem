import * as env from './env'
import { noteName } from './music'
import { samples } from './samples'

export const sample = async (context, path) => {
  const response = await window.fetch(path)
  const arrayBuffer = await response.arrayBuffer()
  const audioBuffer = await context.decodeAudioData(arrayBuffer)
  const sourceNode = context.createBufferSource()
  sourceNode.buffer = audioBuffer
  return sourceNode
}

export const sampler = async keyOrMap => {
  const sampleMap = typeof keyOrMap === 'string' ? samples[keyOrMap] : keyOrMap
  const context = env.context()

  const buffers = await Promise.all(
    Object.keys(sampleMap).map(note =>
      fetch(sampleMap[note])
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
        .then(buffer => Object.create({ note, buffer }))
    )
  )

  const parseNote = note => {
    if (Array.isArray(note)) {
      return note.map(parseNote)
    } else if (typeof note === 'number') {
      return [noteName(note)]
    } else {
      return [note]
    }
  }

  return (note, options, callback) => {
    const now = context.currentTime
    const notes = parseNote(note)
    const defaults = { volume: 1, start: now, duration: Infinity }
    const { volume, start, duration } = Object.assign(defaults, options)

    notes.map(n => {
      if (note) {
        const buffer = buffers.find(b => b.note == n).buffer
        let sourceNode = context.createBufferSource()
        let gainNode = context.createGain()
        sourceNode.buffer = buffer

        const zero = 0.00001 // value must be positive for exponentialRamp
        gainNode.gain.value = volume
        gainNode.gain.exponentialRampToValueAtTime(
          zero,
          start + Math.min(duration, buffer.duration)
        )

        sourceNode.connect(gainNode)
        gainNode.connect(context.destination)

        sourceNode.start(start)
        sourceNode.stop(start + Math.min(duration, buffer.duration))

        sourceNode.onended = () => {
          callback()
        }

        sourceNode = null
        gainNode = null
      // Rest
      } else {
        let osc = context.createOscillator()
        osc.onended = () => {
          callback()
        }
        osc.start(start)
        osc.stop(start + duration)
      }
    })
  }
}

export const sampleMap = pathFn => {
  const notes = 'C,C#,D,D#,E,F,F#,G,G#,A,A#,B'.split(',')
  const octaves = [1, 2, 3, 4, 5, 6, 7]
  const extension = '.mp3'

  return notes
    .flatMap(note =>
      octaves.map(octave => {
        const name = `${note}${octave}`
        const path = pathFn(note, octave)
        return { [name]: path }
      })
    )
    .reduce((a, b) => Object.assign(a, b), {})
}

// import { map, find, isString, defaults } from 'lodash'
// import { instruments as instrumentSamples } from 'gen-samples'
// import { reverbs as reverbSamples } from 'gen-samples'
//
// const sampler = async (context, samples, globalOptions = {}) => {
//   const { pan, volume, reverb } = defaults(globalOptions, {
//     volume: 0.8,
//     pan: 0,
//     reverb: 'room'
//   })
//
//   const buffers = await createSampleBuffers(context, samples)
//   const reverbNode = await createReverb(context, context.destination, reverb)
//   const panNode = createPan(context, reverbNode, pan)
//   const gainNode = createGain(context, panNode, volume)
//
//   return (note, localOptions) => {
//     const buffer = find(buffers, { note }).buffer
//     play(context, gainNode, buffer, localOptions)
//   }
// }
//
// const load = async (context, path) => {
//   return fetch(path)
//     .then(response => response.arrayBuffer())
//     .then(arrayBuffer => context.decodeAudioData(arrayBuffer))
// }
//
// const loadSample = async (context, path, note) => {
//   return load(context, path).then(audioBuffer => {
//     return {
//       note,
//       buffer: audioBuffer
//     }
//   })
// }
//
// const loadImpulse = async (context, path) => {
//   return load(context, path).then(audioBuffer => {
//     return {
//       buffer: audioBuffer
//     }
//   })
// }
//
// const createSampleBuffers = async (context, samples) => {
//   const sampleMap = isString(samples) ? instrumentSamples[samples] : samples
//
//   return await Promise.all(
//     map(sampleMap, (path, note) => loadSample(context, path, note))
//   )
// }
//
// const createReverb = async (context, output, impulse) => {
//   const impulseBuffer = await loadImpulse(context, reverbSamples[impulse])
//   const convolverNode = context.createConvolver()
//   convolverNode.buffer = impulseBuffer.buffer
//   convolverNode.connect(output)
//   return convolverNode
// }
//
// const createGain = (context, output, volume) => {
//   const now = context.currentTime
//   const gainNode = context.createGain()
//   gainNode.gain.setValueAtTime(volume, now)
//   gainNode.connect(output)
//   return gainNode
// }
//
// const createPan = (context, output, pan) => {
//   const panNode = context.createStereoPanner()
//   panNode.pan.value = pan
//   panNode.connect(output)
//   return panNode
// }
//
// const createSource = (context, output, buffer) => {
//   const now = context.currentTime
//   const sourceNode = context.createBufferSource()
//   sourceNode.buffer = buffer
//   sourceNode.start(now)
//   sourceNode.stop(now + buffer.duration)
//   sourceNode.connect(output)
//   return sourceNode
// }
//
// const createEnvelope = (context, output, volume, attack, release) => {
//   const now = context.currentTime
//   const zero = 0.00001 // value must be positive for exponentialRamp
//   const gainNode = context.createGain()
//   gainNode.gain
//     .setValueAtTime(0, now)
//     .linearRampToValueAtTime(volume, now + attack)
//     .exponentialRampToValueAtTime(zero, now + attack + release)
//   gainNode.connect(output)
//   return gainNode
// }
//
// const play = (context, output, buffer, options = {}) => {
//   const { volume, attack, release } = defaults(options, {
//     volume: 0.8,
//     attack: 0,
//     release: 100
//   })
//
//   const envelopeNode = createEnvelope(context, output, volume, attack, release)
//   createSource(context, envelopeNode, buffer)
// }
