import styles from './Checkbox.module.css'

interface CheckboxProps {
    updateTask: (id:number, isDone: boolean) => void;
    id: number;
    done: boolean;
}

export function Checkbox({ updateTask, id, done }:CheckboxProps) {

    function handleCheckTask() {
        updateTask(id, done)
    }

    return(
        <input className={styles.checkTaskButton} onChange={handleCheckTask} type="checkbox" />
    )
}