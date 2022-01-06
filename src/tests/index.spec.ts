import supertest from 'supertest'
import fs from 'fs'
import app from '../index'
import { thumbnailPath, checkIsExist } from '../path/getpath'
import { resiezeImg, getImage } from '../middelware/resize'

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

  it('expect checkIsExist function defined ', () => {
    expect(checkIsExist).toBeDefined()
  })
  it('check resize and get image pass test', async () => {
    await resiezeImg('nar', '500', '500')
    const image = getImage('nar', '500', '500')

    expect(image).toBeTruthy()
  })
})
