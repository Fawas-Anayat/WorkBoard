import './App.css'
import { Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import Notifications from './pages/Notifications'
import Team from './pages/Team'
import Settings from './pages/Settings'
import Notfound from './pages/Notfound'

import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path='*' element = {<Notfound/>}/>
 
      <Route element={<MainLayout />}>
        <Route path='/team' element = {<Team/>}/>
        <Route path='/settings' element = {<Settings/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notifications" element={<Notifications />} />
      </Route>
    </Routes>
  )
}

export default App