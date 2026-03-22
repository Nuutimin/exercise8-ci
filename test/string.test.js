/**
 * @file string.test.js
 * @description Tests for string utility functions: capitalize, endsWith,
 * upperFirst, and words. No known bugs in any of these implementations.
 */

import { describe, it, expect } from 'vitest'
import capitalize from '../src/capitalize.js'
import endsWith from '../src/endsWith.js'
import upperFirst from '../src/upperFirst.js'
import words from '../src/words.js'

describe('String functions', () => {

  /**
   * @description Tests for capitalize(string).
   * Depends on: src/capitalize.js
   * No known bugs.
   */
  describe('capitalize', () => {
    it('muuttaa ensimmäisen kirjaimen isoksi, loput pieniksi', () => {
      expect(capitalize('FRED')).toBe('Fred')
    })
    it('toimii pienillä kirjaimilla', () => {
      expect(capitalize('hello')).toBe('Hello')
    })
    it('palauttaa tyhjän merkkijonon tyhjällä syötteellä', () => {
      expect(capitalize('')).toBe('')
    })
  })

  /**
   * @description Tests for endsWith(string, target, position).
   * Depends on: src/endsWith.js
   * No known bugs.
   */
  describe('endsWith', () => {
    it('palauttaa true kun merkkijono loppuu oikein', () => {
      expect(endsWith('abc', 'c')).toBe(true)
    })
    it('palauttaa false kun merkkijono ei lopu oikein', () => {
      expect(endsWith('abc', 'b')).toBe(false)
    })
  })

  /**
   * @description Tests for upperFirst(string).
   * Depends on: src/upperFirst.js
   * No known bugs.
   */
  describe('upperFirst', () => {
    it('muuttaa ensimmäisen kirjaimen isoksi', () => {
      expect(upperFirst('fred')).toBe('Fred')
    })
  })

  /**
   * @description Tests for words(string, pattern).
   * Depends on: src/words.js
   * No known bugs.
   */
  describe('words', () => {
    it('jakaa merkkijonon sanoiksi', () => {
      expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
    })
  })

})