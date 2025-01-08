import { Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './routes/home/Main'
import Single from './routes/single/Single'
import Register from './routes/auth/register/Register'
import Login from "./routes/auth/login/Login"
import Dashboard from "./routes/dashboard/Dashboard"
import Admin from './routes/admin/Admin'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product/:id' element={<Single/>} />
        <Route path='/auth' element={<Register/>}/>
        <Route path='/auth/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/admin' element={<Admin/>} />
      </Routes>

    </>
  )
}

export default App
