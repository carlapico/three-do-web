import { useState } from 'react';
import ToDoList from './components/ToDoList';
import AddTask from './components/AddTask';
import './App.css';

function App() {
  const [taskList, setTaskList] = useState()
  return (
    <>
      <h1>Three-do</h1>
      <ToDoList taskList={taskList} setTaskList={setTaskList} />
      <AddTask setTaskList={setTaskList}/> 
    </>
  );
}

export default App;
