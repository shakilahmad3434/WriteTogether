import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(`${process.env.MONGO_URL}/${process.env.DB}`)
.then(() => console.log(`Database connected - ${process.env.DB}`))
.catch(() => {
	console.log(`Database connection failed - ${process.env.DB}`)
})

import express, { Request, Response } from 'express'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(cors({ origin: process.env.CLIENT }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use((req: Request, res: Response) => {
	res.status(404).json({ message: `${req.url} not found` })
})

app.listen(process.env.PORT || 8080, () => console.log(`Server is running on http://localhost:${process.env.PORT}`))