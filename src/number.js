export const random = (min, max) => {
  return min + Math.floor(Math.random() * (max - min + 1))
}

export const remap = (value, min, max, newMin, newMax) => {
  return newMin + (newMax - newMin) * ((value - min) / (max - min))
}

export const round = n => {
  return Math.round(n * 1e2) / 1e2
}
