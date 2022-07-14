import styles from "./header.module.css"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { useState } from "react"
import logoSvg from '../../assets/Logo.svg';
import { useTasks } from "../../hooks/useTasks";

export function Header() {
    const { addTask } = useTasks();

    const [title , setTitle] = useState("")

    function onChangeTitle(event) {
        setTitle(event.target.value)
    }
    
    function onSubmitTask(event) {
        event.preventDefault()
        addTask(title)
        setTitle("")
    }

    return(
        <header className={styles.header}>
            <img src={logoSvg} alt="Logotipo ToDo List - Foguete azul" />
            <form onSubmit={onSubmitTask} className={styles.search}>
                <input value={title} onChange={onChangeTitle} placeholder="Adicione uma nova tarefa"/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20} />
                </button>
            </form>
        </header>
    )
}