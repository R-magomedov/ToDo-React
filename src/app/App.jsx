import TaskPage from "@/pages/TaskPage"
import TasksPages from "@/pages/TasksPages"
import Router from "./routing/Router"
import './styles'


const App = () => {
  const routes = {
    '/': TasksPages,
    '/tasks/:id': TaskPage,
    '*': () => <div>404 Страница не найдена</div>
  }
  return (
    <Router routes={routes} />
  )
}

export default App
