import { Input } from "antd";
import { useState } from "react";
const { Search } = Input

export default function AddTask({setTaskList, token}) {
    const [task, setTask] = useState('')
    const addTask= () => {
    // fetch("https://three-do-api-cp.web.app/", {
    fetch("http://localhost:5555/tasks", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json", 
            "Authorization": token, 
        }, 
        body: JSON.stringify({ task, done:false })
    })
        .then(results => results.json())
        .then(data => {
            setTaskList(data)
            setTask('')
            // you'll see... we have to add something here in the future. 
        })
        .catch(console.error)
    }
    return (
        <div className="add-task">
             <Search 
                value={task}
                onChange = {e => setTask(e.target.value)}
                enterButton = "Add"
                size = "Large"
                onSearch = {addTask}
            />
        </div>
    )
}