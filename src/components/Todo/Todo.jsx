import React, { useContext } from 'react'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import TodoInfo from '../TodoInfo/TodoInfo'
import TodoList from '../TodoList/TodoList'
import Button from '../Button/Button'
import { TaskContext } from '../../contex/TaskContex'
import styles from './Todo.module.scss'

const Todo = () => {

  const { firstInCompleteTaskRef } = useContext(TaskContext)

  return (
      <div className={styles.todo}>
      <h1 className={styles.title}>To Do List</h1>
      <AddTaskForm styles={styles} />
      <SearchTaskForm styles={styles} />
      <TodoInfo styles={styles} />
      <Button
        onClick={() => firstInCompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}>
        Показать незавершенные задачи
      </Button>
      <TodoList styles={styles} />
      </div>
  )
}

export default Todo