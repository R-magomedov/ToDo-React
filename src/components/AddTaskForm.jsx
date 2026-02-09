import React from 'react'
import Field from './Field'
import Button from './Button'

const AddTaskForm = ({addTask}) => {

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
        />
        <Button type="submit">Добавить</Button>
      </form>
  )
}

export default AddTaskForm