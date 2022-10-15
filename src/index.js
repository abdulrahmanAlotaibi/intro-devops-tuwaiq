/**
 * Author: Abdulrahman Alotaibi
 * Desc: This is a node js application server that we are going to containerize using Docker images, 
 * we don't need to install any dependencies other than Docker, because the image will take care of all of these things
 */

const express = require("express")

// Init the server for 
const app = express()

const PORT = 3000 

app.get("/", (req, res)=>{
    res.send("Hello Tuwaiq student!")
})


app.listen(PORT, ()=>{
    console.log("Tuwaiq Workshop server is listening on PORT: ", PORT)
})