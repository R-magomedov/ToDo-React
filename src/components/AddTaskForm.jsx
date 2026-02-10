import React from 'react'
import Field from './Field'
import Button from './Button'

const AddTaskForm = ({addTask, newTaskTitle, setNewTaskTitle}) => {

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
        />
        <Button type="submit">Добавить</Button>
      </form>
  )
}

export default AddTaskForm