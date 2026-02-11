import React, { useContext } from 'react'
import Field from './Field'
import { TaskContext } from '../contex/TaskContex'

const SearchTaskForm = () => {

  const { searchQuery, setSearchQuery } = useContext(TaskContext)
  return (
    <form
      className="todo__form"
      onSubmit={(event) => event.preventDefault()}
    >
       <Field 
          className="todo__field"
          id="search-task"
          label="Поиск задачи"
          type="search"
          value={searchQuery}
          onInput={({target}) => setSearchQuery(target.value)}
        />
      </form>
  )
}

export default SearchTaskForm