// import {useState,useEffect} from "react";//Importing function
// import TaskItem from "../components/TaskItem";
// import { getTasks,updateTask,deleteTask,createTask } from "../services/api";

// const Home=()=>{// React component called Home
//                 //Creates a state variable called tasks
//                 // Starts with an empty array []
//                 // setTasks is the function to update the tasks
//                 //This will hold all your to-do task
//     const [tasks,setTasks]=useState([]);//[] coz of multiple objects or documents
//     const [text,setText]=useState("");//setText is the function to update the  state variable text
//     useEffect(()=>{//useEffect notices the page loaded and runs loadTasks()
//         loadTasks();
//     },[]);
//     const loadTasks=async()=>{
//         const res=await getTasks();
//         setTasks(res.data);//res.data - This gets the actual task information from the result
//                     //setTasks() - This updates your webpage to show the new tasks
//     };
//     const handleAdd=async()=>{
//         if(!text.trim()) return;//.trim() - This removes extra white  spaces from the beginning and end of the text
//         //if text empty run the reurn null and not empty does run return
//         // text.trim() = "Buy groceries" (has content)
//         // !text.trim() = false (because it's NOT empty)
//         // if(false) = doesn't run the return
//         // Function continues to next line
//         const res=await createTask({text,completed:false});
//         setTasks((prev)=>[...prev,res.data]);//dds the new task to your existing list of tasks 
//         //[...prev, res.data] - This creates a new list
//         //...prev = takes all your existing tasks and spreads them out
//         setText("");//Clear the input box where the user typed the task.
//     };
//     const handleToggle=async(id)=>{
//         const task=tasks.find((t)=>t.id===id)//tasks.find(...) - Look through all your tasks
//         // (t) => t.id === id - Find the task where the ID matches the ID we're looking fo
//         const res=await updateTask(id,{...task,completed:!task.completed});//{...task, completed: !task.completed} - This creates a new object:
//             // ...task - Takes all the existing task info (text, date created, etc.)
//             // completed: !task.completed - Changes ONLY the completed status to its opposite
//         setTasks((prev)=>prev.map((t)=>(t.id===id ? res.data:t)));// Updates the task list on your screen with the new completion status
//         //  setTasks(...) - Function that updates the displayed task list
//         // (prev) => prev.map(...) - Takes the current task list and transforms it
//         // .map((t) => ...) - Goes through each task one by one
//         // (t.id === id ? res.data : t) - For each task, this asks:

//         // "Is this the task we just updated?" (t.id === id)
//         // If YES: Replace it with the updated version (res.data)
//         // If NO: Keep the task as it was (t)
//     };
//     const handleDelete=async(id)=>{
//         await deleteTask(id);//Removes the task from the database/server.
//         setTasks((prev)=>prev.filter((t)=>t._id!==id));//Removes the task from your screen by creating a new list without that task.
//         //setTasks(...) - Function that updates the displayed task list
//         // (prev) => prev.filter(...) - Takes the current task list and filters it
//         // .filter((t) => t._id !== id) - Creates a new list that only includes tasks where:
//         // t._id !== id means "keep this task only if its ID is NOT equal to the ID we're deleting"
//     };
//     return(
//         <div className="min-h-screen bg-gray-100 p-10 max-w-xl mx-auto">
//             <h1 className="text-3xl font-bold mb-6 text-center ">QuickTasks</h1>
//             <div className="flex gap-2 mb-4">
//                 <input type="text" 
//                 value={text}
//                 onChange={(e)=>setText(e.target.value)}
//                 // When user types, update the text variable
//                 // e - The event (information about what happened)=Here's what happened
//                 // target - The element that triggered the event (the input box)=This is where it happened
//                 // value - The current text inside that element=This is what's currently there
//                 placeholder="Enter new Task..."
//                 className="border w-full p-2 rounded "
//                 />
//                 <button onClick={handleAdd} className="bg-blue-500 text-white px-rounded rounded">Add</button>
//                 </div>
//                 <ul>
//                     {tasks.map((task)=>(//transforms each item in a list. Here it's transforming each task object into a visual <TaskItem> component.
//                     //A custom component that displays a single task.
//                         <TaskItem key={task._id} task={task} onDelete={handleDelete} onToggle={handleToggle}/>
//                     ))}
//                 </ul>
//         </div> 
//     )
// }
// export default Home;

import { useState, useEffect } from "react"; // Importing function
import TaskItem from "../components/TaskItem";
import { getTasks, updateTask, deleteTask, createTask } from "../services/api";

const Home = () => {
    // React component called Home
    // Creates a state variable called tasks
    // Starts with an empty array []
    // setTasks is the function to update the tasks
    // This will hold all your to-do tasks

    const [tasks, setTasks] = useState([]); // [] coz of multiple objects or documents
    const [text, setText] = useState(""); // setText is the function to update the state variable text

    useEffect(() => {
        // useEffect notices the page loaded and runs loadTasks()
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const res = await getTasks();
        setTasks(res.data); // res.data - This gets the actual task information from the result
        // setTasks() - This updates your webpage to show the new tasks
    };

    const handleAdd = async () => {
        //if (!text.trim()) return; 


        // .trim() - This removes extra white spaces from the beginning and end of the text
        // if text empty run the return null and not empty does run return
        // text.trim() = "Buy groceries" (has content)
        // !text.trim() = false (because it's NOT empty)
        // if(false) = doesn't run the return
        // Function continues to next line
        const trimmed=text.trim();
        if(!trimmed)return ;

        const isDuplicate=tasks.some(task=>task.text.toLowerCase()===trimmed.toLowerCase());
        if(isDuplicate){
            alert("This Text Already Exists");
            return;
        }

        const res = await createTask({ text, completed: false });
        setTasks((prev) => [...prev, res.data]); 
        // Adds the new task to your existing list of tasks 
        // [...prev, res.data] - This creates a new list
        // ...prev = takes all your existing tasks and spreads them out

        setText(""); // Clear the input box where the user typed the task.
    };

    const handleToggle = async (_id) => {
        const task = tasks.find((t) => t._id === _id); 
        // tasks.find(...) - Look through all your tasks
        // (t) => t.id === id - Find the task where the ID matches the ID we're looking for

        const res = await updateTask(_id, { ...task, completed: !task.completed });
        // {...task, completed: !task.completed} - This creates a new object:
        // ...task - Takes all the existing task info (text, date created, etc.)
        // completed: !task.completed - Changes ONLY the completed status to its opposite

        setTasks((prev) =>
            prev.map((t) => (t._id === _id ? res.data : t))
        ); 
        // Updates the task list on your screen with the new completion status
        // setTasks(...) - Function that updates the displayed task list
        // .map((t) => ...) - Goes through each task one by one
        // (t.id === id ? res.data : t) - For each task, this asks:
        // "Is this the task we just updated?" (t.id === id)
        // If YES: Replace it with the updated version (res.data)
        // If NO: Keep the task as it was (t)
    };

    const handleDelete = async (id) => {
        await deleteTask(id); // Removes the task from the database/server.
        setTasks((prev) => prev.filter((t) => t._id !== id)); 
        // Removes the task from your screen by creating a new list without that task.
        // .filter((t) => t._id !== id) - Creates a new list that only includes tasks where:
        // t._id !== id means "keep this task only if its ID is NOT equal to the ID we're deleting"
    };

    return (
        <div className="min-h-screen bg-gray-100 p-10 max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">QuickTasks</h1>
            <div className="flex gap-2 mb-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter new Task..."
                    className="border w-full p-2 rounded"
                />
                {/* When user types, update the text variable */}
                {/* e - The event (information about what happened) = Here's what happened */}
                {/* target - The element that triggered the event (the input box) = This is where it happened */}
                {/* value - The current text inside that element = This is what's currently there */}

                <button
                    onClick={handleAdd}
                    className="bg-blue-500 text-white px-4 rounded"
                >
                    Add
                </button>
            </div>

            <ul>
                {tasks.map((task) => (
                    // transforms each item in a list. Here it's transforming each task object into a visual <TaskItem> component.
                    // A custom component that displays a single task.
                    <TaskItem
                        key={task._id}
                        task={task}
                        onDelete={handleDelete}
                        onToggle={handleToggle}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Home;
