import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import MainPage from './MainPage.jsx'
import Settings from './Settings.jsx'
import Create from './Create.jsx'
import Edit from './Edit.jsx'
import { useTasks } from './mutateTasks.jsx'
import './App.css'

function App() {
  const { tasks, createTask, editTask, deleteTask, toggleComplete } = useTasks()
  const [filter, setFilter] = useState('all')
  const [sortBy, setSortBy] = useState('due')
  const [sortDirection, setSortDirection] = useState('asc')

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage
              tasks={tasks}
              deleteTask={deleteTask}
              toggleComplete={toggleComplete}
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
        <Route path="/edit/:index" element={<Edit tasks={tasks} editTask={editTask} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

