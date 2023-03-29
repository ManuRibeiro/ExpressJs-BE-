const express = require("express");
const router = express.Router();

router.post("/",(req,res)=>{
   return res.status(200).json({users:{
        firstUser:"user1",
        secondUser:"user2",
        thirdUser:"user3"}})    
})

module.exports = router