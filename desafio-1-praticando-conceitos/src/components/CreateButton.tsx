import { PlusCircle } from 'phosphor-react'
import styles from './CreateButton.module.css'

interface CreateButtonProps {
    isEmpty: boolean;
}

export function CreateButton({ isEmpty }:CreateButtonProps) {
    return(
        <button className={styles.createTaskButton} disabled={isEmpty} type='submit' >Criar <PlusCircle size={21}/></button>
    )
}