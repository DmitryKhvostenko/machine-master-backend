import userModel from '../models/User.js'
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
	try {
		const user = await userModel.findOne({ email: req.body.email })

		if (!user) {
			return res.status(404).json({
				message:
					'Помилка авторизації! Будь ласка, перевірте правильність пошти або пароля'
			})
		}

		if (req.body.password !== user.password) {
			return res.status(400).json({
				message:
					'Помилка авторизації! Будь ласка, перевірте правильність пошти або пароля',
			})
		}

		const token = jwt.sign(
			{
				_id: user._id,
			},
			process.env.SECRET_JWT,
			{ expiresIn: '30d' }
		)

		const { passwordHash, ...userData } = user._doc

		res.json({
			token,
		})
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Не вдалося авторизуватися',
		})
	}
}

export const isLogin = async (req, res) => {
	res.json(true)
}
