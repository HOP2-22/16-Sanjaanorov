const User = require("../models/User");


exports.getUsers = async (_request, response) => {
  try {
    const users = await User.find()
    response.send(users);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
};

exports.getUsersbyId = async (request, response) => {
  const _id = request.params.id;
  try {
    const users = await User.findById({ _id })
    response.send(users)
  } catch (error) {
    response.status(400).send({ message: error.message })
  }
}

exports.createUsers= async(request,response) =>{
const user=request.body
try{
const userData= await User.create(user);
response.send(userData)
}catch(error){
  response.status(500).send({message:"Failed to add"+ error.message})
}
}
exports.updateUsers=async(request,response)=>{
  const _id=request.params.id;
  const user = request.body
  try{
   const updatedData= await User.findByIdAndUpdate({_id}, user)
   response.send(updatedData)
  }catch(error){
    response.status(400).send({message:"Failed to update" +error.message})
  }
}
exports.deleteUsers=async(request,response)=>{
  const _id=request.params.id;
  const user = request.body
  try{
   const deletedData= await User.findByIdAndDelete({_id},user)
   response.send(""+_id)
  }catch(error){
    response.status(400).send({message:"Failed to delete" +error.message})
  }
}


