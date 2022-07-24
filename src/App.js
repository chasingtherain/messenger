import React from 'react';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from './pages/Signin';
import ResetPassword from './pages/ResetPassword';
import ContactListColumn from './components/ContactListColumn';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/' element={<ContactListColumn/>}/>
            <Route path='/forgot-password' element={<ResetPassword/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
