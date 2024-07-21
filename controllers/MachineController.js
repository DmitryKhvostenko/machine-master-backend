import MachineModel from '../models/Machine.js'
import RepairModel from '../models/Repair.js'
import RepairTypeModel from '../models/RepairType.js'

export const createMachineAndRepair = async (req, res) => {
	const { country, year, brand, repairTypeId, startDate, notes } = req.body
	try {
		let machine = await MachineModel.findOne({ country, year, brand })

		if (!machine) {
			const machineDoc = new MachineModel({
				country,
				year,
				brand,
				repairCounts: 1,
			})

			machine = await machineDoc.save()
		} else {
			machine.repairCounts += 1
			await machine.save()
		}
		const repairDoc = new RepairModel({
			machineId: machine._id,
			repairTypeId,
			startDate,
			notes,
		})

		const repair = await repairDoc.save()

		const repairType = await RepairTypeModel.findById(repairTypeId)

		const response = {
			brand: machine.brand,
			repairName: repairType.name,
			repairId: repair._id,
		}

		res.json(response)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не вдалося додати верстат і ремонт',
		})
	}
}


export const getAllMachines = async (req, res) => {
	try {
		const machines = await MachineModel.find().select(
			'country year brand repairCounts'
		)
		res.json(machines)
	} catch (err) {
		console.log(err)
		res.status(500).json({
			message: 'Не вдалося отримати дані про ремонти',
		})
	}
}
