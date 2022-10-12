import { useState } from "react";
import { Header } from "./components/Header"
import { NewTask } from "./components/NewTask"
import { Tasks } from "./components/Tasks"
import { v4 as uuidv4 } from 'uuid';

import "./global.css"

interface Task {
  id: string;
  message: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addTask(message: string) {
    const newToDo = {
      id: uuidv4(),
      message: message,
      done: false,
    }
    setTasks([...tasks, newToDo])
  }

  function completeTask(taskIdToComplete: string) {
    const tasksUpdated = tasks.map( (task: Task) => {
      if (task.id === taskIdToComplete) {
        let completed = task.done;
        return {...task, done: !completed};
      }
      return task;
    });

    setTasks(tasksUpdated);
  }

  function deleteTask(taskIdToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== taskIdToDelete;
    })
    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <NewTask onAddNewTask={addTask} />
      <Tasks taskList={tasks} onDeleteTask={deleteTask} onCompleteTask={completeTask} />
    </div>
  )
}

export default App
