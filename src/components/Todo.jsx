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

  const deleteAllTasks = () => {
    console.log('Удалить все задачи')
  }

  const deleteTask = (taskId) => {
    console.log(`Удалить задачу c id: ${taskId}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача id: ${taskId} ${isDone ? 'выполнена' : 'не выполнена'}`)
  }

  const filterTasks = (qwery) => {
    console.log(`Поиск: ${qwery}`)
  }

  const addTask = () => {
    console.log('Добавить задачу')
  }

  return (
    <div className="todo">
    <h1 className="todo__title">To Do List</h1>
    <AddTaskForm 
      addTask={addTask}
    />
    <SearchTaskForm 
      onSearchinput={filterTasks}
    />
    <TodoInfo 
      total = {tasks.length} 
      done = {tasks.filter((task) => task.isDone).length}
      onDeleteAllButtonClick = {deleteAllTasks}
    />
    <TodoList 
      tasks={tasks}
      onDeleteTaskButtonClick={deleteTask}
      onTaskCompleteChange={toggleTaskComplete}
    />
  </div>
  )
}

export default Todo