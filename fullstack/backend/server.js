/**
 * Author: Abdulrahman Alotaibi
 * Desc: This is a node js application server that we are going to containerize using Docker images, 
 */

const express = require("express")
const cors = require("cors")
const path = require("path")
const morgan = require("morgan")

// Init the server for 
const app = express()

const PORT = 8000 
 
 // Access-Control-Allow-Origin *
app.use(
    cors({
    //   credentials: true,
      origin: "*",
    })
);

app.use(morgan("dev"));

// To parse incoming requests as json
app.use(express.json());

// Set Static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res)=>{
     res.send("Hello Tuwaiq student!")
 })
 
// To check the availablity of the server
app.get("/_health", (req, res) => {
    res.status(200).json({greeting:"Hello Wrokshop team!"});
});

app.listen(PORT, ()=>{
     console.log("Tuwaiq Workshop server is listening on PORT: ", PORT)
 })