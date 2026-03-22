import { describe, it, expect } from 'vitest'
import isBoolean from '../src/isBoolean.js'
import isDate from '../src/isDate.js'
import isObject from '../src/isObject.js'
import isObjectLike from '../src/isObjectLike.js'
import isArrayLike from '../src/isArrayLike.js'
import eq from '../src/eq.js'
import defaultTo from '../src/defaultTo.js'

describe('Type checking functions', () => {

  describe('isBoolean', () => {
    it('palauttaa true boolean-arvolle', () => {
      expect(isBoolean(true)).toBe(true)
      expect(isBoolean(false)).toBe(true)
    })
    it('palauttaa false ei-boolean-arvolle', () => {
      expect(isBoolean(1)).toBe(false)
      expect(isBoolean('true')).toBe(false)
    })
  })

  describe('isDate', () => {
    it('palauttaa true Date-oliolle', () => {
      expect(isDate(new Date())).toBe(true)
    })
    it('palauttaa false ei-Date-arvolle', () => {
      expect(isDate('2026-01-01')).toBe(false)
      expect(isDate(12345)).toBe(false)
    })
  })

  describe('isObject', () => {
    it('palauttaa true oliolle', () => {
      expect(isObject({})).toBe(true)
      expect(isObject([1, 2, 3])).toBe(true)
    })
    it('palauttaa false primitiiville', () => {
      expect(isObject(null)).toBe(false)
      expect(isObject(1)).toBe(false)
    })
  })

  describe('isObjectLike', () => {
    it('palauttaa true oliolle', () => {
      expect(isObjectLike({})).toBe(true)
    })
    it('palauttaa false nullille', () => {
      expect(isObjectLike(null)).toBe(false)
    })
  })

  describe('isArrayLike', () => {
    it('palauttaa true taulukolle', () => {
      expect(isArrayLike([1, 2, 3])).toBe(true)
      expect(isArrayLike('abc')).toBe(true)
    })
    it('palauttaa false funktiolle', () => {
      expect(isArrayLike(() => {})).toBe(false)
    })
  })

  describe('eq', () => {
    it('vertaa kahta arvoa', () => {
      expect(eq(1, 1)).toBe(true)
      expect(eq(1, 2)).toBe(false)
    })
    it('NaN on yhtä suuri kuin NaN', () => {
      expect(eq(NaN, NaN)).toBe(true)
    })
  })

  describe('defaultTo', () => {
    it('palauttaa oletusarvon null-arvolle', () => {
      expect(defaultTo(null, 'default')).toBe('default')
    })
    it('palauttaa alkuperäisen arvon jos se on validi', () => {
      expect(defaultTo(1, 10)).toBe(1)
    })
  })

})