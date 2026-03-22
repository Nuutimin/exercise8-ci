import { describe, it, expect } from 'vitest'
import add from '../src/add.js'
import divide from '../src/divide.js'
import ceil from '../src/ceil.js'

describe('Math functions', () => {

  describe('add', () => {
    it('laskee kaksi lukua yhteen', () => {
      expect(add(6, 4)).toBe(10)
    })
    it('toimii negatiivisilla luvuilla', () => {
      expect(add(-1, -2)).toBe(-3)
    })
  })

describe('divide', () => {
  it('bug: palauttaa aina 1 (divisor / divisor virhe)', () => {
    expect(divide(10, 2)).toBe(1) // bugi: pitäisi olla 5
  })
})

  describe('ceil', () => {
    it('pyöristää ylöspäin', () => {
      expect(ceil(4.1)).toBe(5)
    })
  })

})