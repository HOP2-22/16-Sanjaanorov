const Comment=require("../models/Comment")
const User=require("../models/User")
const Post=require("../models/Postman")
exports.getCommentList = async (request,response)=>{
    try{
    const comments = await Comment.find()
    response.send(comments)
    }catch(error){
        response.status(500).send({message:error.message});
    }
};
exports.createComments = async (request, response) => {
    try {
      const newComment = await new Comment({
        message: "test",
        owner: "schrme",
        post: "num1",
      }).save();
      console.log(newComment);
      response.json({ message: "success", data: newComment });
    } catch (error) {
      response.status().send({ message: error.message });
    }
  };
exports.deleteComment = async(request,response)=>{
    const _id = request.params.id
    try{
    const DeletedData= await Comment.findByIdAndDelete({_id})
    response.send(""+ _id)
    }catch(error){
        response.status().send({message:error.message})
    }
}
exports.getCommentListByPost = async(request,response)=>{
    const _id=request.params.id
   
    try{
        const comment= await Comment.find()
        const newData=comment.filter((el)=>{
            return el.post=_id
        })
        response.send(newData)
    }catch(error){
  response.status(400).send({message: "failed to tes"+ error.message})
    }
}
exports.getCommentListByUser = async (req, res) => {
  const _id = req.params.id;
  const user = await Comment.find();
  const neww = user.filter((el) => {
    return el.owner === _id;
  });
  res.send(neww);
};