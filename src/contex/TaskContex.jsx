
import { createContext, useCallback, useEffect, useMemo, useRef, useState } from "react"

export const TaskContext = createContext({})

export const TasksProvider = ({ children }) => {
    
  const [ tasks, setTasks ] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if(savedTasks && JSON.parse(savedTasks).length > 0) {
      return JSON.parse(savedTasks)
    }

    return [
      {id: 'task-1', title: 'Купить хлеб', isDone: false},
      {id: 'task-2', title: 'Купить сыр', isDone: true},
    ]
  })

  const [ newTaskTitle, setNewTaskTitle ] = useState('')

  const [ searchQuery, setSearchQuery ] = useState('')

  const newTaskInputRef = useRef(null)
  const firstInCompleteTaskRef = useRef(null)
  const firstInCompleteTaskId = tasks.find(({isDone}) => !isDone)?.id

  const deleteAllTasks = useCallback(() => {
    const isConfirmed = confirm('Вы уверены?')
    if(isConfirmed) {
      setTasks([])
    }
  }, [])

  const deleteTask = useCallback((taskId) => {
    setTasks(tasks.filter((task) => 
      task.id !== taskId))
  }, [tasks])

  const toggleTaskComplete = useCallback((taskId, isDone) => {
    setTasks(
      tasks.map((task) => {
        if(task.id === taskId) {
          return {...task, isDone}
        }
        return task
      })
    )
  }, [tasks])

  const addTask = useCallback(() => {
    if(newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false,
      }

      setTasks((prevTasks) => [...prevTasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
      newTaskInputRef.current.focus()
    }
  }, [newTaskTitle])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    newTaskInputRef.current.focus()
  }, [])


  const filteredTasks = useMemo(() => {
    const clearSearchQuery = searchQuery.trim().toLowerCase()

    return clearSearchQuery.length > 0
      ? tasks.filter(({title}) => title.toLowerCase().includes(clearSearchQuery))
      : null
  }, [searchQuery, tasks])


    return (
        <TaskContext.Provider value={{
            tasks,
            filteredTasks,
            firstInCompleteTaskId,
            firstInCompleteTaskRef,
            deleteTask,
            toggleTaskComplete,
            deleteAllTasks,

            newTaskTitle,
            setNewTaskTitle,
            newTaskInputRef,
            searchQuery,
            setSearchQuery,
            addTask
          }}>
            { children }
          </TaskContext.Provider>
        
    )
}