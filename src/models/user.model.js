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
	exercises:{
		type: [mongoose.Schema.Types.Mixed],
		required: false
	},
	record:{
		type: [mongoose.Schema.Types.Mixed],
		required: false
	}

});

const userModel = mongoose.model("User", userSchema);

export default userModel;