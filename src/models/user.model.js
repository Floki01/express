import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	routines:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Routine',
	}],
	record:{
		type: [mongoose.Schema.Types.Mixed],
		required: false
	},
	rol:{
		type: String,
		enum: ['admin', 'usuario'],
		default: 'usuario'
	}

});

const userModel = mongoose.model("User", userSchema);
export default userModel;