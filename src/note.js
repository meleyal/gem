import { invert } from 'lodash'
import { pitches, velocities } from './constants'
import { remap } from './number'

const { F, FFF, SILENT } = velocities

export class Note {
  constructor(pitch, duration = Infinity, velocity = F) {
    this.pitch = pitch
    this.duration = duration
    this.velocity = velocity
  }

  get name() {
    return invert(pitches)[this.pitch]
  }

  get volume() {
    return remap(this.velocity, SILENT, FFF, 0, 1)
  }

  quantize(bpm) {
    const bps = 60.0 / bpm
    this.duration = this.duration * bps
    return this
  }

  transpose(num) {
    this.pitch = this.pitch + num
    return this
  }
}
