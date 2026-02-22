import React, { memo, useContext } from 'react'
import { TaskContext, TodoItem } from '@/entities/todo'

const TodoList = ({styles}) => {
 
    const {
       tasks,
       filteredTasks
    } = useContext(TaskContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return <div className={styles.emptyMessage}>Задач нет</div>
    }

    if(hasTasks && isEmptyFilteredTasks) {
        return <div className={styles.emptyMessage}>Ничего не найдено</div>
    }

  return (
    <ul className={styles.list}>
        {(filteredTasks ?? tasks).map((task) => (
          <TodoItem
            className={styles.item}
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