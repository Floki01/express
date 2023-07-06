import userModel from "../models/user.model.js";

export async function getUsers(req, res){
    
    try{
        const users = await userModel.find({rol: "user"});
        JSON.stringify(users)
        return res.status(201).json((users));
    }catch(error){

    }
    

}