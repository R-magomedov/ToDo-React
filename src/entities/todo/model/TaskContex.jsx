
import { createContext, useMemo } from "react"
import useTask from "./useTask"
import useIncomleteTaskSkroll from "./useIncomleteTaskSkroll"

export const TaskContext = createContext({})

export const TasksProvider = ({ children }) => {
    
 const {
    tasks,
    filteredTasks,
    deleteTask,
    toggleTaskComplete,
    deleteAllTasks,

    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
    searchQuery,
    setSearchQuery,
    addTask,
    disappearingTaskId,
    appearingTaskId
 } = useTask()

 const {
    firstInCompleteTaskId,
    firstInCompleteTaskRef
 } = useIncomleteTaskSkroll(tasks)

 const value = useMemo(() => ({
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
   addTask,
   disappearingTaskId,
   appearingTaskId
 }), [ 
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
   addTask,
   disappearingTaskId,
   appearingTaskId])

    return (
        <TaskContext.Provider value={value}>
            { children }
          </TaskContext.Provider>
        
    )
}