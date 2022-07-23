import React from 'react';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignIn from './pages/Signin';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
