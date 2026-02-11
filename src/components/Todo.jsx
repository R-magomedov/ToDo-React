import React, { useContext } from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import Button from './Button'
import { TaskContext } from '../contex/TaskContex'

const Todo = () => {

  const { firstInCompleteTaskRef } = useContext(TaskContext)

  return (
      <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => firstInCompleteTaskRef.current?.scrollIntoView({behavior: 'smooth'})}>
        Показать незавершенные задачи
      </Button>
      <TodoList />
      </div>
  )
}

export default Todo