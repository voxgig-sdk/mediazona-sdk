
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { MediazonaSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await MediazonaSDK.test()
    equal(null !== testsdk, true)
  })

})
