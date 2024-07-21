import mongoose from 'mongoose'

const RepairSchema = new mongoose.Schema(
	{
		machineId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Machine',
			required: true,
		},
		repairTypeId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'RepairTypes',
			required: true,
		},
		startDate: {
			type: Date,
			required: true,
		},
		notes: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Repair', RepairSchema)


