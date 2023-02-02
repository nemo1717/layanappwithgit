
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Register from './components/userAccounts/Signup.js'
import LoginForm from './components/userAccounts/LoginForm'
function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='pages'>
          <Routes>
            <Route
              path = "/"
              element = {<Home/>}
            />
            <Route path = "/register" element = {<Register/>} />
            <Route path = "/login" element = {<LoginForm/>} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App