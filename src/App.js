import React from 'react';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/Signin';
import ResetPassword from './pages/ResetPassword';
import MainScreen from './components/MainScreen';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/' element={<MainScreen/>}/>
            <Route path='/forgot-password' element={<ResetPassword/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
