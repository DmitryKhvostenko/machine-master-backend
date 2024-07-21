import RepairType from '../models/RepairType.js'

export const getTypes = async (req, res) => {
	try {
		const repairs = await RepairType.find().select('_id name')

		res.json(repairs)
	} catch (err) {
    console.log(err);
		res.status(500).json({
			message: 'Не вдалося отримати типи ремонтів',
		})
	}
}
