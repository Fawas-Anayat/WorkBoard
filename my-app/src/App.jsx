import './App.css'
import { Routes , Route } from 'react-router-dom'
import Login from './pages/Login'
import  Dashboard  from './pages/Dashboard'
import Landing from './pages/Landing'
import MainLayout from './components/layout/MainLayout'

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Landing/>} />
      <Route path='/login' element = {<Login/>} />

      <Route element = {<MainLayout/>}> 
        <Route path='/dashboard' element = {<Dashboard/>}/>
      </Route>
    </Routes>
  )
  
}

export default App
