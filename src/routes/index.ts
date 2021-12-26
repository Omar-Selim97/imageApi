import express, { Request, Response } from 'express'

import resize from './api/image'

const routes = express.Router()

routes.get('/', (req: Request, res: Response) => {
  res.status(200).send(`
  <h1> Image-proccessing Api</h1>
  <h3>Follow the steps in readme</h3>
  `)
})
routes.use('/resize', resize)

export default routes
