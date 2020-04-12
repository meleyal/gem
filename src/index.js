import banner from './banner'
import * as constants from './constants'
import * as pattern from './pattern'
import seq from './seq'
import { createEnv } from './env'
import sampler from './sampler'
import reverb from './reverb'
import compressor from './compressor'

const tuplet = {
  createEnv,
  fx: {
    reverb,
    compressor,
  },
  inst: {
    sampler,
  },
  seq,
  pattern,
  music: constants,
}

window.tuplet = tuplet
export default tuplet
