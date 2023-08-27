require("dotenv").config();
const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.once("open",()=>{
    console.log("mongoose is connected to db");
});
mongoose.connection.on("error",(err)=>{
    console.log(err);
});

async function startServer(){
    await mongoose.connect(MONGO_URL);
    
    server.listen(PORT,()=>{
        console.log("Server is started");
    })
};

startServer();