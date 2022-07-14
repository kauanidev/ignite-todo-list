import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext({});

export function TasksContextProvider({ children }) {
    const [tasks, setTasks] = useState([])

    function setTasksAndSave(newTasks) {
        setTasks(newTasks)
        localStorage.setItem("todo:savedtasks", JSON.stringify(newTasks))
    }

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

    function loadSavedTasks() {
        const saved = localStorage.getItem("todo:savedtasks")
        if (saved) {
            setTasks(JSON.parse(saved))
    }
    }

    useEffect(() => {
        loadSavedTasks()
    }, [])

    return (
        <TasksContext.Provider value={{ addTask, tasks, deleteTaskById, toggleTaskCompletedById }}>
            {children}
        </TasksContext.Provider>
    )
}