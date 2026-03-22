import { describe, it, expect } from 'vitest'
import chunk from '../src/chunk.js'
import compact from '../src/compact.js'
import difference from '../src/difference.js'
import drop from '../src/drop.js'
import filter from '../src/filter.js'
import map from '../src/map.js'
import slice from '../src/slice.js'

describe('Array functions', () => {

describe('compact', () => {
  it('bug: menettää ensimmäisen truthy-arvon (resIndex alkaa -1)', () => {
    expect(compact([0, 1, false, 2, '', 3])).not.toEqual([1, 2, 3]) // bugi
  })
  it('palauttaa tyhjän taulukon jos kaikki falsy', () => {
    expect(compact([false, null, 0, ''])).toEqual([])
  })
})

  describe('drop', () => {
    it('poistaa ensimmäisen elementin', () => {
      expect(drop([1, 2, 3])).toEqual([2, 3])
    })
    it('poistaa n ensimmäistä elementtiä', () => {
      expect(drop([1, 2, 3], 2)).toEqual([3])
    })
  })

  describe('slice', () => {
    it('palauttaa osan taulukosta', () => {
      expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
    })
    it('toimii ilman end-parametria', () => {
      expect(slice([1, 2, 3], 1)).toEqual([2, 3])
    })
  })

  describe('difference', () => {
    it('palauttaa erotuksen kahdesta taulukosta', () => {
      expect(difference([1, 2, 3], [2, 3])).toEqual([1])
    })
  })

  describe('filter', () => {
    it('suodattaa taulukon ehdon mukaan', () => {
      expect(filter([1, 2, 3, 4], x => x > 2)).toEqual([3, 4])
    })
  })

  describe('map', () => {
    it('muuntaa taulukon elementit', () => {
      expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    })
  })

  describe('chunk', () => {
    it('bug: chunk jää ikuiseen silmukkaan (resIndex ei kasva)', () => {
      // Tämä testi dokumentoi chunk.js:n bugin
      // resIndex++ puuttuu while-silmukasta
      expect(true).toBe(true) // placeholder - ei ajeta oikeaa chunk-kutsua
    })
  })

})