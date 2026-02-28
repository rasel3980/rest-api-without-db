const users = require("../Models/user.model");
const { v4: uuidv4 } = require('uuid');

// get all user
const getAllUser = (req,res)=>{
    res.status(200).json({users})
}
// create new user by post method
const createUser = (req,res)=>{
    const newUser ={
        id:uuidv4(),
    username: req.body.username,
    email: req.body.email,
    };
    users.push(newUser)

    res.status(200).json({users})
}
// update user by put method
const updateUser = (req,res)=>{
    const id = req.params.id
    const {username,email} = req.body;
    users.filter((user)=>user.id === id).map(
        (selectedUser)=>{
            selectedUser.username=username;
            selectedUser.email =email;

        }
    )

    res.status(200).json(users)
}
// delete user
const deleteUser = (req,res)=>{
    const id = req.params.id;
    const userDelete = users.filter((user)=>user.id !==id)
    res.status(200).json(userDelete)
}

module.exports = {getAllUser,createUser,updateUser,deleteUser};