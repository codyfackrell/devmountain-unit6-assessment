const shuffle = require('../src/shuffle')
const bots = require("../src/botsData");


describe('shuffle should...', () => {
  test('return an array', () => {
    expect(shuffle()).toStrictEqual([])
  })

  test('return array of same length', () => {
    expect(shuffle(bots)).toHaveLength(10)
  })
})