const assert = require('assert')
const Rooster = require('../index.js')

describe('rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      //setup
      const expected = 'cock-a-doodle-doo!'

      //exercise
      const actual = Rooster.announceDawn()

      //verify
      assert.strictEqual(actual, expected)
    })
  })
  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      //setup
      const expected = '6'

      //exercise
      const actual = Rooster.timeAtDawn(06)

      //verify
      assert.strictEqual(actual, expected)
    })
    it('throws RangeError if passed number is lower than 0', () => {
      //setup
      const exercise = () => { Rooster.timeAtDawn(-1) }
      const err = RangeError

      //verify
      assert.throws(exercise, err)
    })
    it('throws RangeError if passed number is higher than 23', () => {
      //setup
      const exercise = () => { Rooster.timeAtDawn(24) }
      const err = RangeError

      //verify
      assert.throws(exercise, err)
    })
  })
})
