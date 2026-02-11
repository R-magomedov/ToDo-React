import React, { useContext } from 'react'
import Field from './Field'
import Button from './Button'
import { TaskContext } from '../contex/TaskContex'

const AddTaskForm = () => {

  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = useContext(TaskContext)

  const onSumbit = (event) => {
    event.preventDefault()
    addTask()
  }
  return (
    <form className="todo__form" onSubmit={onSumbit}>
        <Field 
          className="todo__field"
          id="new-task"
          label="Новая задача"
          value={newTaskTitle}
          onInput={({target}) => setNewTaskTitle(target.value)}
          ref = {newTaskInputRef}
        />
        <Button type="submit">Добавить</Button>
      </form>
  )
}

export default AddTaskForm