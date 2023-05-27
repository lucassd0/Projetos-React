import { Trash } from 'phosphor-react'
import styles from './DeleteButton.module.css'

interface DeleteButtonProps {
    id: number;
    deleteTask: (id:number) => void;
}

export function DeleteButton({ id, deleteTask }:DeleteButtonProps) {

    function handleDeleteTask(){
        deleteTask(id)
    }

    return(
        <button onClick={handleDeleteTask} className={styles.deleteTaskButton}> <Trash size={20} /> </button>
    )
}