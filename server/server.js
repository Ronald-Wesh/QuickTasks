const express=require('express');
// const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require('dotenv');
const connectDB=require("./config/db.js")
const taskRoutes = require("./Routes/taskRoutes");

//Store env(private keys and url)
// require("dotenv").config();
// 1. Load .env first
dotenv.config();

// 2. Connect to DB
connectDB();

//Start the application
const app=express();

//Middlwares-Security everything to pass thru here
app.use(cors());
app.use(express.json());

//cONNECT TO dB
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// });

//Model-Task
//mongoose.Schema({...}) - This creates the blueprint/template
//mongoose.model("Task", ...) - This takes your blueprint and creates a "Task" model you can use to actually create, save, and find tasks
//const Task = ... - This saves the model in a variable called Task
// const Task=mongoose.model("Task",new mongoose.Schema({
//     text:String,
//     completed:Boolean,
// }));

//Routes-Creating an API endpoint
app.use("/api/tasks", taskRoutes);


const PORT=process.env.PORT ||5000;
// starts your web server and makes it listen for incoming requests.
//()=>console.log(...) - This is an arrow function that runs when the server starts
//API is live and ready to handle requests!
app.listen(PORT,()=>console.log(`Server is running on on http://localhost:${PORT}`));