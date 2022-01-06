import path from 'path'

import * as fs from 'fs'

import sharp from 'sharp'

import { imgPath, thumbnailPath } from '../path/getpath'

// resize our image with sharp
const resiezeImg = async (fileName: string, width: string, height: string): Promise<void> => {
  if (+width > 0 && +width < 1000 && +height > 0 && +height < 1000) {
    await sharp(path.join(imgPath, `${fileName}.jpg`))
      .resize(parseInt(width, 10), parseInt(height, 10))
      .toFile(path.join(thumbnailPath, `${fileName}${width}x${height}.jpg`))
      .catch((err) => {
        throw new Error(`'whoops' ${err}`)
      })
  }
}

// return img when put url
// eslint-disable-next-line consistent-return
const getImage = (fileName: string, width: string, height: string): unknown => {
  try {
    const catchImage = fs.readFileSync(
      path.join(thumbnailPath, `${fileName}${width}x${height}.jpg`)
    )

    return catchImage
  } catch (err) {
    throw new Error(`'whoops width and height : must be more than 0 and less than 1000 ' ${err}`)
  }
}

export { resiezeImg, getImage }
