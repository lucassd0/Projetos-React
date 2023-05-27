import { ChangeEvent } from 'react';
import styles from './Input.module.css'

interface InputProps {
    value: string;
    onTextChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ value, onTextChange }:InputProps) {

    return(
        <input className={styles.inputField} value={value} onChange={onTextChange} type="text" placeholder='Adicione uma nova tarefa' />
    )
}