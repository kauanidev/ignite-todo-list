import { useEffect } from "react"
import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"

function App() {

  const [tasks , setTasks] = useState([])

  function setTasksAndSave(newTasks) {
    setTasks(newTasks)
    localStorage.setItem("todo:savedtasks", JSON.stringify(newTasks))
  }

  function loadSavedTasks() {
    const saved = localStorage.getItem("todo:savedtasks")
    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  useEffect(() => {
    loadSavedTasks()
  }, [])

  function addTask(taskTitle) {
    if (!taskTitle.trim("")) {
      alert("Insira um texto válido para sua tarefa!")
      return
    }

    setTasksAndSave([
     ...tasks,
     {
      id: crypto.randomUUID(),
      title: taskTitle,
      isCompleted: false
     }
    ])
  }

  function deleteTaskById(taskId) {
    const newTasks = tasks.filter(item => item.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId) {
    const newTasks = tasks.map((item) => {
      if(item.id === taskId) {
        return {
          ...item,
          isCompleted: !item.isCompleted
        }
      }
      return item;
    });
    setTasksAndSave(newTasks);
  }


  return (
    <>
      <Header addTask={addTask}/>
      <Tasks deleteTask={deleteTaskById} toggleTaskCompleted={toggleTaskCompletedById} tasks={tasks}/>
    </>
  )
}

export default App
