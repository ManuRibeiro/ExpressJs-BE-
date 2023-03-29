const express = require("express");
const router = express.Router()

router.get("/",(req,res)=>{
    console.log(req.query.name)
    res.send(usersArr)
})

router.get("/new",(req,res)=>{
    //res.send("user new Form")
    res.render("users/new",{firstName: "Test"})
})

router.post("/",(req,res)=>{
    const isValid = true;
    if(isValid){
        usersArr.push({ firstName: req.body.firstName})
        res.redirect(`/users/${usersArr.length - 1}`)

    }else{
        console.log("Error")
        res.render("users/new",{ firstName : req.body.firstName})
    }
    console.log(req.body.firstName)
    res.send("Hi")
    //res.send("Create new user")
})

//instead of using the individual methds u can use this style so u can mantain ur code cleaner
router.route("/:id")
.get((req,res)=>{
    console.log(req.userId)
    userId = req.params.id;
    res.status(200).send(`get users ${userId}`)
})
.put((req,res)=>{
    userId = req.params.id;
    res.status(200).send(`update users ${userId}`)
})
.delete((req,res)=>{
    userId = req.params.id;
    res.status(200).send(`delete users ${userId}`)
})

//list of available users at start
const usersArr = [{name:"user1"},{name:"user2"}]


router.param("id", (req,res,next,id) =>{
    req.userId = usersArr[id]
    next()
})


//dynamic routers should always be last so it wont affect the static ones
//router.get("/:id",(req,res)=>{

//    userId = req.params.id
//    res.send(`Get users by id ${userId}`)
//})

//router.put("/:id",(req,res)=>{

//    userId = req.params.id
//    res.send(`Update users by id ${userId}`)
//})
//router.delete("/:id",(req,res)=>{

//    userId = req.params.id
//    res.send(`Delete users by id ${userId}`)
//})

module.exports = router