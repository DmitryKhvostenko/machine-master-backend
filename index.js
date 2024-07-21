import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express()

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Database is starting')
	})
	.catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 4444, (err) => {
	if (err) {
		return console.log(err)
	}
	console.log('Server is starting')
})
