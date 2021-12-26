import supertest from 'supertest'
import fs from 'fs'
import app from '../index'
import { thumbnailPath } from '../path/getpath'

// create a request object
const request = supertest(app)

describe('check our endpoint', () => {
  it(' yes here your api/resize endpoint', async () => {
    const response = await request.get('/api/resize?fileName=fjord&height=300&width=300')
    expect(response.status).toBe(200)
  })

  it('Images by second time properties should exist', () => {
    expect(fs.existsSync(`${thumbnailPath}/fjord300x300.jpg`)).toBeTruthy()
  })
  it('Images by first time properties should not be exist', () => {
    expect(fs.existsSync(`${thumbnailPath}/fjord500x500.jpg`)).toBeFalsy()
  })
})
