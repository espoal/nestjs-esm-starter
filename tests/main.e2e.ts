import { strict as assert } from 'node:assert'
import { it, test } from 'node:test'

test('Main app', () => {
  it('Root path is working', async () => {
    const resp = await fetch('http://localhost:3000/')
    assert(resp.ok, 'Request to / failed')

    const body = await resp.text()
    assert(body, 'Body is undefined')
    assert.equal(body, 'Hello from NestJS ESM starter!', 'Wrong body')
  })
})
