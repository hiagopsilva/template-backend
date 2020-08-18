import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import routes from '@routes/index'
import connectionDatabase from '@database/connection'

const app = express()

connectionDatabase()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)

app.listen(3333, () => {
  console.log('Server started in port: 3333')
})
