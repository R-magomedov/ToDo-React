import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange}) => {
    const hasTasks = true

    if(!hasTasks) {
        return <div className="todo__empty-message"></div>
    }

  return (
    <ul className="todo__list">
        {tasks.map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            id={task.id}
            title={task.title}
            isDone={task.isDone}
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
          />
        ))}
      </ul>
  )
}

export default TodoList