import RepairTypeModel from '../models/RepairType.js'
import RepairModel from '../models/Repair.js'

export const getPrev = async (req, res) => {
	try {
		const repairs = await RepairModel.find()
			.populate('machineId', 'brand')
			.populate('repairTypeId', 'name')

		const filteredRepairs = repairs.map((repair) => ({
			brand: repair.machineId.brand,
			repairName: repair.repairTypeId.name,
			repairId: repair._id,
		}))

		res.json(filteredRepairs)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не вдалося отримати дані про ремонти',
		})
	}
}

export const getById = async (req, res) => {
	try {
		const { id } = req.params
		console.log(id)

		const repair = await RepairModel.findById(id)
			.populate('machineId', 'country year brand repairCounts')
			.populate('repairTypeId', 'name duration cost notes')

		if (!repair) {
			return res.status(404).json({
				message: 'Ремонт не знайдено',
			})
		}

		const result = {
			machineId: {
				_id: repair.machineId._id,
				country: repair.machineId.country,
				year: repair.machineId.year,
				brand: repair.machineId.brand,
				repairCount: repair.machineId.repairCounts,
			},
			repairId: {
				name: repair.repairTypeId.name,
				duration: repair.repairTypeId.duration,
				cost: repair.repairTypeId.cost,
				notes: repair.repairTypeId.notes,
			},
			startDate: repair.startDate,
			notes: repair.notes,
		}

		res.json(result)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не вдалося отримати дані про ремонт',
		})
	}
}

	export const deleteRepair = async (req, res) => {
		try {
			const { id } = req.params

			const deletedRepair = await RepairModel.findByIdAndDelete(id)

			if (!deletedRepair) {
				return res.status(404).json({
					message: 'Ремонт не знайдено',
				})
			}

			res.json({
				message: 'Ремонт успішно видалено',
				deletedRepair,
			})
		} catch (err) {
			console.log(err)
			res.status(500).json({
				message: 'Не вдалося видалити ремонт',
			})
		}
	}
