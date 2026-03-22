/**
 * @file collection.test.js
 * @description Tests for collection utility functions: reduce, every, clamp,
 * at, and countBy.
 * Note: clamp.js has a known bug (Issue #4) and countBy.js has a known bug
 * (Issue #5). Their tests document the buggy behaviour.
 */

import { describe, it, expect } from 'vitest'
import reduce from '../src/reduce.js'
import every from '../src/every.js'
import clamp from '../src/clamp.js'
import at from '../src/at.js'
import countBy from '../src/countBy.js'

describe('Collection functions', () => {

  /**
   * @description Tests for reduce(collection, iteratee, accumulator).
   * Depends on: src/reduce.js
   * No known bugs.
   */
  describe('reduce', () => {
    it('summaa taulukon arvot', () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n, 0)).toBe(6)
    })
    it('toimii merkkijonoilla', () => {
      expect(reduce(['a', 'b', 'c'], (acc, val) => acc + val, '')).toBe('abc')
    })
  })

  /**
   * @description Tests for every(collection, predicate).
   * Depends on: src/every.js
   * No known bugs.
   */
  describe('every', () => {
    it('palauttaa true kun kaikki täyttävät ehdon', () => {
      expect(every([2, 4, 6], n => n % 2 === 0)).toBe(true)
    })
    it('palauttaa false kun yksikin ei täytä ehtoa', () => {
      expect(every([2, 3, 6], n => n % 2 === 0)).toBe(false)
    })
  })

  /**
   * @description Tests for clamp(number, lower, upper).
   * Depends on: src/clamp.js
   * Known bug — Issue #4: returns the wrong boundary value because the
   * comparison operators are inverted, so values above upper are clamped
   * to lower and vice versa.
   */
  describe('clamp', () => {
  it('bug: palauttaa väärän raja-arvon (vertailuoperaattorit käänteisiä)', () => {
    expect(clamp(10, 1, 5)).toBe(1) // bugi: pitäisi olla 5
  })
})

  /**
   * @description Tests for at(object, paths).
   * Depends on: src/at.js
   * No known bugs.
   */
  describe('at', () => {
    it('palauttaa alkiot annetuista indekseistä', () => {
      expect(at(['a', 'b', 'c'], [0, 2])).toEqual(['a', 'c'])
    })
  })

  /**
   * @description Tests for countBy(collection, iteratee).
   * Depends on: src/countBy.js
   * Known bug — Issue #5: undercounts every group by one because keys are
   * initialised to 0 before incrementing, so the first element in each
   * group is not counted.
   */
  describe('countBy', () => {
  it('bug: laskee yhdellä liian vähän (alustaa 0:ksi eikä 1:ksi)', () => {
    expect(countBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ 4: 0, 6: 1 }) // bugi
  })
})

})