import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	routines:[{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Routine',
	}],
	record:{
		type: [mongoose.Schema.Types.Mixed],
		required: false
	},
	bio: String,
	roles: [String],

});

const userModel = mongoose.model("User", userSchema);
export default userModel;