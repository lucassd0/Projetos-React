import styles from './App.module.css'
import "./global.css"

import clipboardIcon from "./assets/Clipboard.svg"
import toDoLogo from "./assets/Logo.svg"
import { Input } from './components/Input'
import { CreateButton } from './components/CreateButton'
import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './components/Task'

interface TaskObject {
  id: number;
  done: boolean;
  content: string;
}

function App() {

  const [tasks, setTasks] = useState<TaskObject[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function createNewId() {
    let lastTask = tasks.slice(-1)
    return lastTask[0] ? lastTask[0].id + 1 : 0
  }

  function renderTasks() {
    return (
      <div>     
          {
              tasks.length ? 
              tasks.map(task => {
                return(
                  <Task
                  key={task.id}
                  id={task.id}
                  onDeleteTask={deleteTask}
                  onUpdateTask={updateTask}
                  done={task.done}
                  content={task.content}
                  />
                )
              }) : 
              <div className={styles.emptyTaskList}>
                <img src={clipboardIcon} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
              </div>
          } 
      </div>
  )
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    let getId = createNewId();
    const newTask = {
      id: getId,
      done: false,
      content: newTaskText,
    }

    setTasks([...tasks, newTask])
    setNewTaskText('')

  }

  function handleNewCommentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function deleteTask(idTaskToDelete: number) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.id != idTaskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function updateTask(idTaskToCheck: number, isDone: boolean) {
    const taskToUpdate = tasks.findIndex((task) => task.id === idTaskToCheck)
    const updatedTasks = [...tasks]

    updatedTasks[taskToUpdate].done = !isDone
    setTasks(updatedTasks)
  }

  const allTasksCreated = () => {
    return tasks.length
  }

  const allTasksConcluded = () => {
    var checked = tasks.reduce((total, task) => {
      return task.done ? total + 1 : total;
    }, 0)

    if(checked < 1){
      return checked
    }

    return checked + ' de ' + tasks.length
  }

  const isNewTaskEmpty = newTaskText.length == 0

  return (
    <div>
      <header className={styles.header}>
        <img src={toDoLogo} alt="Logotipo da ToDo" />
      </header>
      <form className={styles.createArea} onSubmit={handleCreateNewTask}>
        <Input
          value={newTaskText}
          onTextChange={handleNewCommentChange}
        />
        <CreateButton 
        isEmpty={isNewTaskEmpty}
        />
      </form>
      <main>
        <div className={styles.tasksInfo}>
          <div className={styles.tasksCreated}>
            <strong>Tarefas criadas</strong>
            <p>{allTasksCreated()}</p>
          </div>
          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <p>{allTasksConcluded()}</p>
          </div>
        </div>
        <div className={styles.taskList}>
          {renderTasks()}
        </div>
      </main>
    </div>
  )
}

export default App
