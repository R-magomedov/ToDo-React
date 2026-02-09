import React from 'react'
import Field from './Field'

const SearchTaskForm = ({onSearchinput}) => {
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
          onInput={({target}) => onSearchinput(target.value)}
        />
      </form>
  )
}

export default SearchTaskForm