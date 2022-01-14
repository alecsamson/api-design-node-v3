import { json, urlencoded } from 'body-parser'

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
  console.log('logging')
  req.mydata = 'hello'
  next()
}

router.get('/me', (req, res) => {
  res.send({ me: 'hello' })
})

//cats
// const routes = [
//   'get /cat',
//   'get /cat/:id',
//   'post /cat',
//   'put /cat/:id',
//   'delete /cat/:id'
// ]
router
  .route('/cat')
  .get()
  .post()
router
  .route('/cat/:id')
  .get()
  .put()
  .delete()
app.use('/api', router)
// CRUD

app.get('/', (req, res) => {
  res.send({ data: req.mydata })
})

app.post('/data', (req, res) => {
  console.log(req.body)
  res.send({ ok: true })
})
// post - i'm creating something new

// put - i'm updating something

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3k')
  })
}
