import { useRef } from 'react'

const useIncomleteTaskSkroll = (tasks) => {
    const firstInCompleteTaskRef = useRef(null)
    const firstInCompleteTaskId = tasks.find(({isDone}) => !isDone)?.id
  return {
    firstInCompleteTaskId,
    firstInCompleteTaskRef
  }
}

export default useIncomleteTaskSkroll