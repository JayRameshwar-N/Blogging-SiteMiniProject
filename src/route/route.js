const express = require('express')
const router = express.Router()
const blogController = require("../controllar/blogContro")
const authorController = require("../controllar/authorContro")
const {Authentication,authorisation} = require("../middlewar/auth")



router.post('/blogs',Authentication, blogController.createBlog)
router.post('/authors', authorController.createauther)
router.get('/blogs',Authentication, blogController.getData)
router.put("/blogs/:blogId",Authentication,authorisation, blogController.updateBlog)
router.delete('/blogs/:blogId',Authentication,authorisation, blogController.DELETEdata)
router.delete('/blogs',Authentication,authorisation, blogController.deleteunpublished)
router.post('/login', authorController.login) 


router.all("/*",function(req,res){
return res.status(404).send({status:false,msg:"path is not found"})
})



//////

module.exports = router