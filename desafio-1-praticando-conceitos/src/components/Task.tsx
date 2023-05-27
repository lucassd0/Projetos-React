import { Checkbox } from './Checkbox';
import { DeleteButton } from './DeleteButton';
import styles from './Task.module.css'

interface TaskProps {
    id: number;
    onDeleteTask: (id:number) => void;
    onUpdateTask: (id:number, isDone: boolean) => void;
    done: boolean;
    content: string;
}

export function Task( {id, onDeleteTask, onUpdateTask, done, content}:TaskProps ) {
    return(
        <div className={styles.task}>
            <Checkbox
            id={id}
            done={done}
            updateTask = {onUpdateTask}
            />
            <p>{content}</p>
            <DeleteButton 
                id={id}
                deleteTask = {onDeleteTask}
            />
        </div>
    )
}