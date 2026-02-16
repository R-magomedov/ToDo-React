import React, { useEffect, useState } from 'react'
import tasksAPI from '../api/tasksAPI'
const TaskPage = ({params}) => {
  const taskId = params.id
  const [task, setTask] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    tasksAPI.getById(taskId)
      .then((taskData) => {
        setTask(taskData)
        setHasError(false)
      })
      .catch(() => {
        setHasError(true)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <h1>Загрузка...</h1>
  }

  if (hasError) {
    return <h1>Произошла ошибка</h1>
  }


  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.isDone ? 'Задача выполнена' : 'Задача не выполнена'}</p>
    </div>
  )
}

export default TaskPage