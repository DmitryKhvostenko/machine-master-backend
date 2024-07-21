import { body } from 'express-validator'

export const userValidation = [
	body('email', 'Невірний email').isEmail(),
	body('password', 'Невірний пароль').isLength({ min: 3 }),
]
