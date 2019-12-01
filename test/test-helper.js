class AudioContext {
  get currentTime() {
    return 0
  }
  createGain() {}
  createOscillator() {
    return {
      start: function() {},
      stop: function() {
        this.onended()
      }
    }
  }
  createDynamicsCompressor() {
    return {
      threshold: { value: 0 },
      knee: { value: 0 },
      ratio: { value: 0 },
      attack: { value: 0 },
      release: { value: 0 },
      connect: () => null
    }
  }
  createBufferSource() {
    return {
      playbackRate: { value: 0 }
    }
  }
  createConvolver() {
    return {
      connect: () => null
    }
  }
  decodeAudioData() {
    return {
      duration: Math.random()
    }
  }
}

const fetch = url => {
  return Promise.resolve(
    Promise.resolve({
      arrayBuffer: () => new ArrayBuffer()
    })
  )
}

global.window = { AudioContext, fetch }
