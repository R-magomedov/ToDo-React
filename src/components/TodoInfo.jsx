import React, { memo } from 'react'

const TodoInfo = ({total, done, onDeleteAllButtonClick}) => {

  const haskTasks = total > 0
  return (
    <div className="todo__info">
    <div className="todo__total-tasks">Выполнено {done} из {total} задач</div>
    {haskTasks && (
      <button onClick={onDeleteAllButtonClick} className="todo__delete-all-button" type="button">Удалить все</button>
    )}
  </div>
  )
}

export default memo(TodoInfo) 