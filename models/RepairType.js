import mongoose from 'mongoose'

const RepairTypeSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		duration: {
			type: Number,
			required: true,
		},
		cost: {
			type: Number,
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

export default mongoose.model('RepairTypes', RepairTypeSchema)


