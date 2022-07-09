import styles from "./task.module.css"
import { TbTrash } from "react-icons/tb"
import { BsFillCheckCircleFill } from "react-icons/bs"

export function Task({ task, deleteTask, toggleTaskCompleted }) {

    return(
        <div className={styles.task}>
            <button onClick={() => toggleTaskCompleted(task.id)} className={styles.checkContainer}>
                {task.isCompleted ? (
                    <BsFillCheckCircleFill />
                ) : (
                    <div />
                )}
            </button>
            <p className={task.isCompleted ? styles.textCompleted : ""}>{task.title}</p>
            <button className={styles.deleteButton} onClick={() => deleteTask(task.id)}>
                <TbTrash size={20}/>
            </button>
        </div>
    )
}