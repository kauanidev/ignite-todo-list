import { Header } from "./components/Header"
import { Tasks } from "./components/Tasks"
import { TasksContextProvider } from "./contexts/TasksContext"

function App() {
  return (
    <TasksContextProvider>
      <Header />
      <Tasks />
    </TasksContextProvider>
  )
}

export default App
