import { useEffect, useState } from "react"
import { List, Switch, Alert } from "antd"
import ToDoListCard from "./ToDoListCard"

export default function ToDoList({ taskList, setTaskList, token }) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()

    // call api and use setTaskList to fill in state...
  useEffect(() => {
    fetch("https://three-do-api-cp.web.app/tasks", {
        headers:{
            "Authorization": token, // we are passing the credentials here. 
        }
    })
      .then((results) => results.json())
      .then(
        (tasks) => {
        setTaskList(tasks); /* same as: tasks => setTaskList (tasks)*/
        setLoading(false);
        setError('')
        })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      })
  }, [token, setTaskList,setLoading, setError])

//   if (!taskList) {
//     return <h2>No tasks to complete!</h2>
//   }
  return (
    <>
    {error && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
    />}

    <div className="task-list">
        <List
            dataSource={taskList}
            loading={loading}
            renderItem={(item) => (
                <ToDoListCard 
                    key={item.id} 
                    item={item} 
                    setError={ setError }
                    setLoading={ setLoading }
                    setTaskList= { setTaskList }
                    />
            )}
        />

    </div>
    </>
    // <ul>
    //   {taskList.map((task) => (
    //     <li key={task.id}>{task.task}</li>
    //   ))}
    // </ul>
  )
}
