import React from 'react'

const TodoInfo = ({total, done}) => {
  const haskTasks = total > 0
  return (
    <div className="todo__info">
    <div className="todo__total-tasks">Выполнено {done} из {total} задач</div>
    {haskTasks && (
      <button className="todo__delete-all-button" type="button">Delete all</button>
    )}
  </div>
  )
}

export default TodoInfo