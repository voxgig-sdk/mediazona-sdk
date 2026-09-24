
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MediazonaSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = MediazonaSDK.test()
    equal(testsdk instanceof MediazonaSDK, true,
      'MediazonaSDK.test() must return a client synchronously')
  })

})
