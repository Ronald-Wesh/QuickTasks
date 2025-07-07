const mongoose=require("mongoose");

//creates a detailed blueprint for tasks in your database
const taskSchema=new mongoose.Schema({// Creates a new schema template called taskSchema
    text:{type:String,required:true,},
    completed:{type:Boolean,default:false},
});

//code exports the Task model so other files can use it. 
//Takes your taskSchema blueprint and turns it into a working Task model
module.exports=mongoose.model("Task",taskSchema);