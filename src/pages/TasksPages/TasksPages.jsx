import React from 'react'
import Todo from '@/widgets/Todo'
import { TasksProvider } from '@/entities/todo'

const TasksPages = () => {
  return (
    <TasksProvider>
      <Todo/>
    </TasksProvider>
  )
}

export default TasksPages