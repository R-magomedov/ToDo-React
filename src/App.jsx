import Todo from "./components/Todo"
import { TasksProvider } from "./contex/TaskContex"



const App = () => {
  return (
    <TasksProvider>
      <Todo/>
    </TasksProvider>
  )
}

export default App
