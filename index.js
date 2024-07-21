import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import {
	MachineController,
	RepairController,
	RepairTypeController,
	UserController,
} from './controllers/index.js'

import checkAuth from './utils/checkAuth.js'

import { repairValidation } from './validations/repair.js'
import { userValidation } from './validations/user.js'
import { handleValidationErrors } from './utils/index.js'

import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './swagger/swagger.json' assert { type: 'json' }

const app = express()

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Database is starting')
	})
	.catch((err) => console.log('Database error', err))

app.use(express.json())
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/repair/all-prev', checkAuth, RepairController.getPrev)
app.get('/repair/:id', checkAuth, RepairController.getById)
app.delete('/repair/:id', checkAuth, RepairController.deleteRepair)

app.post(
	'/machine',
	checkAuth,
	repairValidation,
	handleValidationErrors,
	MachineController.createMachineAndRepair
)
app.get('/machine/all', checkAuth, MachineController.getAllMachines)

app.get('/repair-types', checkAuth, RepairTypeController.getTypes)

app.post(
	'/auth/login',
	userValidation,
	handleValidationErrors,
	UserController.login
)
app.get('/auth/isLogin', checkAuth, UserController.isLogin)

app.listen(process.env.PORT || 4444, (err) => {
	if (err) {
		return console.log(err)
	}
	console.log('Server is starting')
})
