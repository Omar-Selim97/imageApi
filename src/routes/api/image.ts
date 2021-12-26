import express, { Request, Response } from 'express'

import { resiezeImg, getImage } from '../../middelware/resize'

import { checkIsExist } from '../../path/getpath'

const newImg = express.Router()

newImg.get('/', async (req: Request, res: Response) => {
  // it changed as you said to be 10
  const width: number = parseInt(req.query.width as string, 10)
  const height: number = parseInt(req.query.height as string, 10)
  const fileName: string = req.query.fileName as string
  try {
    const isImg = checkIsExist(fileName, width, height)
    if (!isImg) {
      await resiezeImg(fileName, width as unknown as string, height as unknown as string)
    }
    const image = getImage(fileName, width as unknown as string, height as unknown as string)
    res.status(200).end(image)
  } catch (error) {
    console.log(error)
    res.status(404).send('your image is not found try anthor path')
  }
})

export default newImg
