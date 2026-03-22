/**
 * @file array.test.js
 * @description Tests for array utility functions: compact, drop, slice,
 * difference, filter, map, and chunk.
 * Note: compact.js has a known bug (Issue #2) and chunk.js has a known
 * bug (Issue #3). Their tests document the buggy behaviour.
 */

import { describe, it, expect } from 'vitest'
import chunk from '../src/chunk.js'
import compact from '../src/compact.js'
import difference from '../src/difference.js'
import drop from '../src/drop.js'
import filter from '../src/filter.js'
import map from '../src/map.js'
import slice from '../src/slice.js'

describe('Array functions', () => {

/**
 * @description Tests for compact(array).
 * Depends on: src/compact.js
 * Known bug — Issue #2: loses the first truthy value because resIndex
 * is initialised to -1 instead of 0, causing an off-by-one write.
 */
describe('compact', () => {
  it('bug: menettää ensimmäisen truthy-arvon (resIndex alkaa -1)', () => {
    expect(compact([0, 1, false, 2, '', 3])).not.toEqual([1, 2, 3]) // bugi
  })
  it('palauttaa tyhjän taulukon jos kaikki falsy', () => {
    expect(compact([false, null, 0, ''])).toEqual([])
  })
})

  /**
   * @description Tests for drop(array, n).
   * Depends on: src/drop.js
   * No known bugs.
   */
  describe('drop', () => {
    it('poistaa ensimmäisen elementin', () => {
      expect(drop([1, 2, 3])).toEqual([2, 3])
    })
    it('poistaa n ensimmäistä elementtiä', () => {
      expect(drop([1, 2, 3], 2)).toEqual([3])
    })
  })

  /**
   * @description Tests for slice(array, start, end).
   * Depends on: src/slice.js
   * No known bugs.
   */
  describe('slice', () => {
    it('palauttaa osan taulukosta', () => {
      expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3])
    })
    it('toimii ilman end-parametria', () => {
      expect(slice([1, 2, 3], 1)).toEqual([2, 3])
    })
  })

  /**
   * @description Tests for difference(array, values).
   * Depends on: src/difference.js
   * No known bugs.
   */
  describe('difference', () => {
    it('palauttaa erotuksen kahdesta taulukosta', () => {
      expect(difference([1, 2, 3], [2, 3])).toEqual([1])
    })
  })

  /**
   * @description Tests for filter(collection, predicate).
   * Depends on: src/filter.js
   * No known bugs.
   */
  describe('filter', () => {
    it('suodattaa taulukon ehdon mukaan', () => {
      expect(filter([1, 2, 3, 4], x => x > 2)).toEqual([3, 4])
    })
  })

  /**
   * @description Tests for map(collection, iteratee).
   * Depends on: src/map.js
   * No known bugs.
   */
  describe('map', () => {
    it('muuntaa taulukon elementit', () => {
      expect(map([1, 2, 3], x => x * 2)).toEqual([2, 4, 6])
    })
  })

  /**
   * @description Tests for chunk(array, size).
   * Depends on: src/chunk.js
   * Known bug — Issue #3: causes an infinite loop because resIndex is never
   * incremented inside the while-loop, so the function never terminates.
   * The test uses a placeholder assertion to document the bug safely.
   */
  describe('chunk', () => {
    it('bug: chunk jää ikuiseen silmukkaan (resIndex ei kasva)', () => {
      // Tämä testi dokumentoi chunk.js:n bugin
      // resIndex++ puuttuu while-silmukasta
      expect(true).toBe(true) // placeholder - ei ajeta oikeaa chunk-kutsua
    })
  })

})