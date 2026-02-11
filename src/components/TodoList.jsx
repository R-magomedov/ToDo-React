import React, { memo } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({tasks = [], onDeleteTaskButtonClick, onTaskCompleteChange, filteredTasks, firstInCompleteTaskRef, firstInCompleteTaskId}) => {

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return <div className="todo__empty-message">Задач нет</div>
    }

    if(hasTasks && isEmptyFilteredTasks) {
        return <div className="todo__empty-message">Ничего не найдено</div>
    }

  return (
    <ul className="todo__list">
        {(filteredTasks ?? tasks).map((task) => (
          <TodoItem
            className="todo__item"
            key={task.id}
            id={task.id}
            ref={task.id === firstInCompleteTaskId ? firstInCompleteTaskRef : null}
            title={task.title}
            isDone={task.isDone}
            onDeleteTaskButtonClick={onDeleteTaskButtonClick}
            onTaskCompleteChange={onTaskCompleteChange}
          />
        ))}
      </ul>
  )
}

export default memo(TodoList) 