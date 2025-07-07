// const TaskItem=({task,onToggle,onDelete})=>{
//     // Creating a React component called TaskItem
//     // Using destructuring to get 3 things passed to this component:
//     // task = The task data (title, completed status, etc.)
//     // onToggle = Function to mark task as complete/incomplete
//     // onDelete = Function to delete the task
//     return(
//         <li className="flex  justify-between items-center bg-white p-2 mb-2 shadow"> {/* When clicked, run a function that calls onToggle with the task ID */}
//             <span onClick={()=>onToggle(task._id)} className={`cursor-pointer ${task.completed ? "line-through text-gray-400":""}`}>{/*When you click the task text, it calls onToggle function
//                 //Passes the task's ID (task._id) to know which task to toggle AS COMPLETED OR INCOMPLETED8*/}
//                 {task.text}{/*SHOWS THE ACTUAL TEXT-  Displaying variables */}
//             </span>
//             <button onClick={()=>onDelete(task._id)} className="text-red-500 font-bold">X</button>//onClick={() => onDelete(task._id)} 
//              {/* When clicked, delete this task */}
//         </li>
//     );
// };
// export default TaskItem;
const TaskItem = ({ task, onToggle, onDelete }) => {
    // Creating a React component called TaskItem
    // Using destructuring to get 3 things passed to this component:
    // task = The task data (title, completed status, etc.)
    // onToggle = Function to mark task as complete/incomplete
    // onDelete = Function to delete the task

    return (
        <li className="flex justify-between items-center bg-white p-2 mb-2 shadow">
            {/* When clicked, run a function that calls onToggle with the task ID */}
            <span
                onClick={() => onToggle(task._id)}
                className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
            >
                {/* When you click the task text, it calls onToggle function */}
                {/* Passes the task's ID (task._id) to know which task to toggle AS COMPLETED OR INCOMPLETED */}
                {task.text} {/* SHOWS THE ACTUAL TEXT - Displaying variables */}
            </span>
            <button
                onClick={() => onDelete(task._id)}
                className="text-red-500 font-bold"
            >
                X
            </button>
            {/* onClick={() => onDelete(task._id)} = When clicked, delete this task */}
        </li>
    );
};

export default TaskItem;
