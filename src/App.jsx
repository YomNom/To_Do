import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import MainPage from './MainPage.jsx'
import Settings from './Settings.jsx'
import Create from './Create.jsx'
import Edit from './Edit.jsx'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([
    {
      taskName: 'First Task',
      completed: false,
      dueDate: '2026-09-04',
      creationDate: '2026-09-03'
    }
  ])
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('due')
  const [sortDirection, setSortDirection] = useState('asc')

  function createTask(taskName, dueDate) {
    setTasks((currentTasks) => [
      ...currentTasks,
      {
        taskName,
        completed: false,
        dueDate,
        creationDate: new Date()
      }
    ])
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              tasks={tasks}
              setTasks={setTasks}
              filter={filter}
              sortBy={sortBy}
              sortDirection={sortDirection}
            />
          }
        />
        <Route
          path="/settings"
          element={
            <Settings
              filter={filter}
              setFilter={setFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
              sortDirection={sortDirection}
              setSortDirection={setSortDirection}
            />
          }
        />
        <Route path="/create" element={<Create createTask={createTask} />} />
        <Route path="/edit/:index" element={<Edit tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

