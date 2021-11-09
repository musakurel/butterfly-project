import express, { ErrorRequestHandler } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import * as BeerController from './controllers/beer'

const app = express()

app.use(bodyParser.json({ limit: '10mb' }) as any)
app.use(bodyParser.text({ type: 'application/x-www-form-urlencoded' }) as any)

app.use(cookieParser())

app.get('/', (req, res) => {
  res
    .status(200)
    .json({
      message: 'kkk'
    })
})

app.use('/beer', BeerController.router)

app.use((req, res) => {
  res
    .status(404)
    .json({
      message: `There is no method ${req.method} for endpoint: ${req.path}`
    })
})


const genericErrorHandler: ErrorRequestHandler = (err, req, res) => {
  console.error(err)
  res
    .status(500)
    .json({
      message: 'unexpected error'
    })
}

app.use(genericErrorHandler)

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
});