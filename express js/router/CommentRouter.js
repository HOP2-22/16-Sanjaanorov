const express= require("express")
const router= express.Router()
const{
    getCommentList,
    getCommentListByPost,
    getCommentListByUser,
    createComments,
    deleteComment,
} = require("../controller/CommentController");

router
.get("/comment",getCommentList)
.get("/posts/:id/comment", getCommentListByPost)
.get("/users/:id/comment", getCommentListByUser)
.post("/comment/create", createComments)
.delete("/comment/:id", deleteComment)

module.exports = router;