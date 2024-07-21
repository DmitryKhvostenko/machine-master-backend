import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import {
	MachineController,
	RepairController,
	RepairTypeController,
	UserController,
} from './controllers/index.js'

const app = express()

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Database is starting')
	})
	.catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.get('/repair/all-prev', RepairController.getPrev)
app.get('/repair/:id', RepairController.getById)
app.delete('/repair/:id', RepairController.deleteRepair)

app.post(
	'/machine',
	MachineController.createMachineAndRepair
)
app.get('/machine/all', MachineController.getAllMachines)

app.get('/repair-types', RepairTypeController.getTypes)

app.post(
	'/auth/login',
	UserController.login
)
app.get('/auth/isLogin', UserController.isLogin)

app.listen(process.env.PORT || 4444, (err) => {
	if (err) {
		return console.log(err)
	}
	console.log('Server is starting')
})
