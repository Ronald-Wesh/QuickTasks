const Task=require("../Models/Task.js");// two dots .. mean:Go up one folder from the current file.”

//Get all tasks
//Gets all tasks from the database
//Sends them back as JSON data (so a website or app can display them)
//Creates a function called getTasks:

// async means it can wait for database operations
// req is the request (what someone is asking for)
// res is the response (what you send back)
const getTasks=async(req,res)=>{
//     Task.find() asks the database "give me all tasks"
// await means "wait for the database to respond"
// tasks stores all the tasks that come
    const tasks=await Task.find();
    res.json(tasks);// sends the tasks back as JSON format
};

//Create a task
const createTask=async (req,res)=>{
    const task =new Task(req.body);//create task from users body
    await task.save();//await it to be saved in the db
    res.json(task)//show what hasa beeen saved 
}
//Update a task
const updateTask=async (req,res)=>{// function called updateTask
    const updated=await Task.findByIdAndUpdate(req.params.id,req.body,{new:true});//req.body- Gets the new data from the user 
    res.json(updated);//{new:true} - This option means "give me back the UPDATED version" (not the old one)
//res.json(updated); - Sends back the updated task
};

//Delete a tasl
const deleteTask=async(req,res)=>{
    await Task.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
};

module.exports={getTasks,updateTask,createTask,deleteTask};