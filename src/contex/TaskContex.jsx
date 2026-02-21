
import { createContext } from "react"
import useTask from "../hooks/useTask"
import useIncomleteTaskSkroll from "../hooks/useIncomleteTaskSkroll"

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
            addTask,
            disappearingTaskId,
            appearingTaskId
          }}>
            { children }
          </TaskContext.Provider>
        
    )
}