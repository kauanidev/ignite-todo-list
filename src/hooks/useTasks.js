import { useContext } from "react";
import { TasksContext } from "../contexts/TasksContext";

export function useTasks() {
    const context = useContext(TasksContext);
    return context;
}