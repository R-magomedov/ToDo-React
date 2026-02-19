import React, { useContext, useState } from 'react'
import Field from '../Field/Field'
import Button from '../Button/Button'
import { TaskContext } from '../../contex/TaskContex'

const AddTaskForm = ({styles}) => {

  const { addTask, newTaskTitle, setNewTaskTitle, newTaskInputRef } = useContext(TaskContext)

  const [ error, setError ] = useState('')

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSumbit = (event) => {
    event.preventDefault()
    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle)
    }
  }

const onInput = (event) => {
  const { value } = event.target
  const clearValue = value.trim()
  const hasOnlySpaces = clearValue.length === 0 && value.length > 0

  setNewTaskTitle(value)
  setError(hasOnlySpaces ? 'Поле не должно быть пустым' : '')
}

  return (
    <form className={styles.form} onSubmit={onSumbit}>
        <Field 
          className={styles.field}
          id="new-task"
          label="Новая задача"
          value={newTaskTitle}
          error={error}
          onInput={onInput}
          ref = {newTaskInputRef}
        />
        <Button
         type="submit"
         disabled={isNewTaskTitleEmpty}
        >
          Добавить
        </Button>
      </form>
  )
}

export default AddTaskForm