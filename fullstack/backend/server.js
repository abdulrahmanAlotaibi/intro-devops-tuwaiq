/**
 * Author: Abdulrahman Alotaibi
 * Desc: This is a node js application server that we are going to containerize using Docker images, 
 */

const express = require("express")
const cors = require("cors")
const path = require("path")
const morgan = require("morgan")

const { Pool, Client } = require('pg')
// pools will use environment variables
const config = {
    user: 'root',
    host: 'localhost',
    database: 'postgres-just-work',
    password: 'password',
    port: 5444,
  }


const callDb = async ()=>{
   try {

    const pgPool = new Pool(config);
    const pgPoolWrapper = {
        async connect() {
            for (let nRetry = 1; ; nRetry++) {
                try {
                    const client = await pgPool.connect();
                    if (nRetry > 1) {
                        console.info('Now successfully connected to Postgres');
                    }
                    return client;
                } catch (e) {
                    if (e.toString().includes('ECONNREFUSED') && nRetry < 5) {
                        console.info('ECONNREFUSED connecting to Postgres, ' +
                            'maybe container is not ready yet, will retry ' + nRetry);
                        // Wait 1 second
                        await new Promise(resolve => setTimeout(resolve, 1000));
                    } else {
                        throw e;
                    }
                }
            }
        }
    };
    await pgPoolWrapper.connect()
   } catch (error) {
        console.log(error)
   }
}

callDb()

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