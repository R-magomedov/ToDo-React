import React from 'react'
import Todo from '../components/Todo'
import { TasksProvider } from '../contex/TaskContex'

const TasksPages = () => {
  return (
    <TasksProvider>
      <Todo/>
    </TasksProvider>
  )
}

export default TasksPages