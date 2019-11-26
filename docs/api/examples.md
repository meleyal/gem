---
title: Examples
---

## Piano

```js
;(async () => {
  const { sampler, range, midiToPitch } = gen

  // load piano instrument
  const piano = await sampler('piano')

  // generate range of all playable note numbers (21-108)
  const notes = range(21, 108)

  // cycle through note numbers and play with time offset
  notes.map((n, idx) => {
    piano(midiToPitch(n), { start: idx * 0.25, duration: 2 })
  })
})()
```
