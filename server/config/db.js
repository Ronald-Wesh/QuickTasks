const mongoose=require("mongoose");

const connectDB=async()=>{//const connectDB=async()=>{...} - This creates a function called connectDB that can wait for things to happen 
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDb Connected");
    }catch(error){
        console.error("MongoDb connection failed",error.message);
        process.exit(1);//If connection fails, shut down the entire app 
    }
}

//makes the function available to use in other files
module.exports =connectDB;