import mongoose from "mongoose";

const MachineSchema = new mongoose.Schema(
	{
		country: {
			type: String,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		brand: {
			type: String,
			required: true,
		},
		repairCounts: {
			type: Number
		}
	},
	{
		timestamps: true,
	}
)

export default mongoose.model('Machine', MachineSchema)