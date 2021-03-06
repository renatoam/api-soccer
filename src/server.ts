import express from 'express'
import cors from 'cors'
// import { router } from './infrastructure/routes'
import { router } from './temporary'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

export { app }