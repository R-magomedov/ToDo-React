import React from 'react'
import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'Купить хлеб', isDone: false},
    {id: 'task-2', title: 'Купить сыр', isDone: true},
  ]
  return (
    <div className="todo">
    <h1 className="todo__title">To Do List</h1>
    <AddTaskForm />
    <SearchTaskForm />
    <TodoInfo 
      total = {tasks.length} 
      done = {tasks.filter((task) => task.isDone).length}
    />
    <TodoList tasks={tasks}/>
  </div>
  )
}

export default Todo