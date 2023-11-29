// App.js

import React, {useState} from "react";
import Login from './Components/Login';
import Register from './Components/Register';
import ResetPassword from "./Components/ResetPassword";

const login = () => <div> <Login /></div>
const register = () => <div> <Register /> </div>
const reset = () => <div> <ResetPassword /> </div>

const App = () => {
  const [currentPage, setCurrentPage] = useState('Login')

  const renderPage = () => {
    switch (currentPage) {
      case 'login' : return <Login />;
      case 'register' : return <Register />;
      case 'reset' : return <ResetPassword />
    }
  }

  return (
    <div>
      <nav>
        <button onClick={()=> setCurrentPage('login')}>Login</button>
        <button onClick={()=> setCurrentPage('register')}>Register</button>
        <button onClick={()=> setCurrentPage('reset')}>Reset</button>
      </nav>
      {renderPage()}
    </div>
  )
}

export default App;
