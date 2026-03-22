/**
 * @file math.test.js
 * @description Tests for math utility functions: add, divide, and ceil.
 * Note: divide.js contains a known bug (Issue #1) and its test documents
 * the buggy behaviour rather than the expected correct behaviour.
 */

import { describe, it, expect } from 'vitest'
import add from '../src/add.js'
import divide from '../src/divide.js'
import ceil from '../src/ceil.js'

describe('Math functions', () => {

  /**
   * @description Tests for add(augend, addend).
   * Depends on: src/add.js
   * No known bugs.
   */
  describe('add', () => {
    it('laskee kaksi lukua yhteen', () => {
      expect(add(6, 4)).toBe(10)
    })
    it('toimii negatiivisilla luvuilla', () => {
      expect(add(-1, -2)).toBe(-3)
    })
  })

/**
   * @description Tests for divide(dividend, divisor).
   * Depends on: src/divide.js
   * Known bug — Issue #1: always returns 1 because the implementation
   * divides divisor/divisor instead of dividend/divisor.
   */
describe('divide', () => {
  it('bug: palauttaa aina 1 (divisor / divisor virhe)', () => {
    expect(divide(10, 2)).toBe(1) // bugi: pitäisi olla 5
  })
})

  /**
   * @description Tests for ceil(number, precision).
   * Depends on: src/ceil.js
   * No known bugs.
   */
  describe('ceil', () => {
    it('pyöristää ylöspäin', () => {
      expect(ceil(4.1)).toBe(5)
    })
  })

})