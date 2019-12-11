import { closest, range } from './array'
import { pitches } from './constants'
import {
  intervalToFrequencyRatio,
  midiToPitch,
  pitchSplit,
  pitchToMidi,
  pitchToPath
} from './music'

const { a0, g8 } = pitches

// TODO: Make this a class
export const sampleMap = (
  pathResolver,
  pitchesWithSamples,
  start = a0,
  end = g8
) => {
  const midiSamples = pitchesWithSamples.map(pitchToMidi)

  return Object.assign(
    ...range(start, end + 1).map(midi => {
      let pitch = midiToPitch(midi)
      let distance = 0
      let path
      let nearest

      if (midiSamples.includes(midi)) {
        path = pathResolver(...pitchSplit(pitch))
      } else {
        nearest = closest(midiSamples, midi)
        distance = midi - nearest
        path = pathResolver(...pitchSplit(midiToPitch(nearest)))
      }

      return {
        [pitch]: {
          path: pitchToPath(path),
          playbackRate: intervalToFrequencyRatio(distance)
        }
      }
    })
  )
}
