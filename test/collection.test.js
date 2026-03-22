import { describe, it, expect } from 'vitest'
import reduce from '../src/reduce.js'
import every from '../src/every.js'
import clamp from '../src/clamp.js'
import at from '../src/at.js'
import countBy from '../src/countBy.js'

describe('Collection functions', () => {

  describe('reduce', () => {
    it('summaa taulukon arvot', () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6)
    })
    it('toimii merkkijonoilla', () => {
      expect(reduce(['a', 'b', 'c'], (acc, val) => acc + val, '')).toBe('abc')
    })
  })

  describe('every', () => {
    it('palauttaa true kun kaikki täyttävät ehdon', () => {
      expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true)
    })
    it('palauttaa false kun yksikin ei täytä ehtoa', () => {
      expect(every([2, 3, 6], n => n % 2 === 0)).toBe(false)
    })
  })

  describe('clamp', () => {
  it('bug: palauttaa väärän raja-arvon (vertailuoperaattorit käänteisiä)', () => {
    expect(clamp(10, 1, 5)).toBe(1) // bugi: pitäisi olla 5
  })
})

  describe('at', () => {
    it('palauttaa alkiot annetuista indekseistä', () => {
      expect(at(['a', 'b', 'c'], [0, 2])).toEqual(['a', 'c'])
    })
  })

  describe('countBy', () => {
  it('bug: laskee yhdellä liian vähän (alustaa 0:ksi eikä 1:ksi)', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 0, 6: 1 }) // bugi
  })
})

})