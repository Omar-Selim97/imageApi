import path from 'path'

import * as fs from 'fs'

import sharp from 'sharp'

import { imgPath, thumbnailPath } from '../path/getpath'

// resize our image with sharp
const resiezeImg = async (fileName: string, width: string, height: string): Promise<void> => {
  await sharp(path.join(imgPath, `${fileName}.jpg`))
    .resize(parseInt(width, 10), parseInt(height, 10))
    .toFile(path.join(thumbnailPath, `${fileName}${width}x${height}.jpg`))
    .catch((err: Error) => {
      throw err
    })
}

// return img when put url
// eslint-disable-next-line consistent-return
const getImage = (fileName: string, width: string, height: string) => {
  try {
    const catchImage = fs.readFileSync(
      path.join(thumbnailPath, `${fileName}${width}x${height}.jpg`)
    )

    return catchImage
  } catch (error) {
    console.log(error)
  }
}

export { resiezeImg, getImage }
