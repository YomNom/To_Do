import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainPage from './MainPage.jsx'
import Settings from './Settings.jsx'
import Create from './Create.jsx'
import Edit from './Edit.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

