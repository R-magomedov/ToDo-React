import React, { memo, useContext } from 'react'
import TodoItem from './TodoItem'
import { TaskContext } from '../contex/TaskContex'

const TodoList = () => {
 
    const {
       tasks,
       filteredTasks
    } = useContext(TaskContext)

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
            title={task.title}
            isDone={task.isDone}
          />
        ))}
      </ul>
  )
}

export default memo(TodoList) 