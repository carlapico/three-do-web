import { useEffect } from "react"

export default function ToDoList({ taskList, setTaskList }) {
  // call api and use setTaskList to fill in state...
  useEffect(() => {
    fetch("https://three-do-api-cp.web.app/tasks")
      .then((results) => results.json())
      .then(
        (tasks) => setTaskList(tasks) /* same as: tasks => setTaskList (tasks)*/
      )
      .catch(console.error)
  }, [setTaskList])

  if (!taskList) {
    return <h2>No tasks to complete!</h2>
  }
  return (
    <ul>
      {taskList.map((task) => (
        <li key={task.id}>{task.task}</li>
      ))}
    </ul>
  )
}
