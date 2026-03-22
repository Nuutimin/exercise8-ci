import { describe, it, expect } from 'vitest'
import capitalize from '../src/capitalize.js'
import endsWith from '../src/endsWith.js'
import upperFirst from '../src/upperFirst.js'
import words from '../src/words.js'

describe('String functions', () => {

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

  describe('endsWith', () => {
    it('palauttaa true kun merkkijono loppuu oikein', () => {
      expect(endsWith('abc', 'c')).toBe(true)
    })
    it('palauttaa false kun merkkijono ei lopu oikein', () => {
      expect(endsWith('abc', 'b')).toBe(false)
    })
  })

  describe('upperFirst', () => {
    it('muuttaa ensimmäisen kirjaimen isoksi', () => {
      expect(upperFirst('fred')).toBe('Fred')
    })
  })

  describe('words', () => {
    it('jakaa merkkijonon sanoiksi', () => {
      expect(words('fred, barney, & pebbles')).toEqual(['fred', 'barney', 'pebbles'])
    })
  })

})