import React, { memo, useContext, useMemo } from 'react'
import { TaskContext } from '../contex/TaskContex'

const TodoInfo = () => {

  const { tasks, deleteAllTasks } = useContext(TaskContext)

  const total = tasks.length
  const haskTasks = total > 0
  const done = useMemo(() => {

    return tasks.filter((task) => task.isDone).length
  }, [tasks])
  return (
    <div className="todo__info">
    <div className="todo__total-tasks">Выполнено {done} из {total} задач</div>
    {haskTasks && (
      <button onClick={deleteAllTasks} className="todo__delete-all-button" type="button">Удалить все</button>
    )}
  </div>
  )
}

export default memo(TodoInfo) 