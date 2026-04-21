import { stringUtils } from '../stringsUtils'

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
      expect(stringUtils.capitalizeFirstLetter('hello world')).toBe(
        'Hello World'
      )
      expect(stringUtils.capitalizeFirstLetter('HELLO WORLD')).toBe(
        'Hello World'
      )
      expect(stringUtils.capitalizeFirstLetter('heLLO world')).toBe(
        'Hello World'
      )
    })

    it('it should remove leading and trailing whitespace from the input string', () => {
      expect(stringUtils.capitalizeFirstLetter('  hello world  ')).toBe(
        'Hello World'
      )
    })
  })
})
