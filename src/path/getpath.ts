import path from 'path'
import * as fs from 'fs'

// our root dir which contain src and node modules

const ourRoot = path.resolve('./')

// the folder of original img
const imgPath = path.join(ourRoot, 'image', 'origin')

// the folder of resizing  img
const thumbnailPath = path.join(ourRoot, 'image', 'thumbnail')

const checkIsExist = (fileName: string, width: number, height: number): boolean => {
  try {
    const files = fs.readdirSync(thumbnailPath)
    const isFileExist = files.includes(`${fileName}${width}x${height}.jpg`)
    return isFileExist
  } catch (error) {
    throw new Error('img is not exist')
  }
}

export { checkIsExist, imgPath, thumbnailPath }
