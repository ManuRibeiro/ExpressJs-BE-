const express = require("express");

const app = express();

const logger = (req,res,next) =>{
    console.log(req.originalUrl)
    next()
}

app.set("view engine", "ejs")
app.use(logger)
app.use(express.urlencoded({extended : true}))

app.get("/",(req,res)=>{


    //res.download("server.js") // passs the path into the download (PATH)
    //res.status(500).json({ message: "Internal Server Error"})
    //res.status(200).json({ message: "OK"})
    //res.render("index",{text:"hello world"})
    
});

const userRouter = require("./routes/users")
const postRouter = require("./routes/posts")
//everything that starts with users aply the userRouter
app.use("/users",userRouter)
app.use("/posts",postRouter)


app.listen(5000,()=>console.log("the server is listening in port 5000"));


