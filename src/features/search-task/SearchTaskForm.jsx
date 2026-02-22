import React, { useContext } from 'react'
import Field from '@/shared/components/Field'
import { TaskContext } from '@/entities/todo'

const SearchTaskForm = ({styles}) => {

  const { searchQuery, setSearchQuery } = useContext(TaskContext)
  return (
    <form
      className={styles.form}
      onSubmit={(event) => event.preventDefault()}
    >
       <Field 
          className={styles.field}
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