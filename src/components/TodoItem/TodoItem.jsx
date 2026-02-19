import React, { memo, useContext } from 'react'
import { TaskContext } from '../../contex/TaskContex'
import RouterLink from '../RouterLink/RouterLink'
import styles from './TodoItem.module.scss'

const TodoItem = ({
    className='', 
    id,
    title, 
    isDone, 
}) => {

  const { deleteTask, toggleTaskComplete, firstInCompleteTaskId, firstInCompleteTaskRef } = useContext(TaskContext)

  return (
    <li className={`${styles.todoItem} ${className}` }>
    <input
      className={styles.checkbox}
      id={id}
      ref={id === firstInCompleteTaskId ? firstInCompleteTaskRef : null}
      type="checkbox"
      checked={isDone}
      onChange={({target}) => (
        toggleTaskComplete(id, target.checked)
      )}
    />
    <label
      className={`${styles.label} visually-hidden`}
      htmlFor={id}
    >
      {title}
    </label>
      <RouterLink to={`/tasks/${id}`} aria-label="task details">
        {title}
      </RouterLink>
    <button
      className={styles.deleteButton}
      aria-label="Delete"
      title="Delete"
      onClick={() => deleteTask(id)}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 5L5 15M5 5L15 15"
          stroke="#757575"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </li>
  )
}

export default memo(TodoItem)