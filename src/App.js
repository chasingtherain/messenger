import React from 'react';
import SignUp from './pages/Signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/Signin';
import ResetPassword from './pages/ResetPassword';
import MainScreen from './components/MainScreen';
import PrivateRoute from './components/PrivateRoute';
import PageNotFound from './pages/PageNotFound';
import EditProfilePage from './pages/EditProfilePage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/sign-up' element={<SignUp/>}/>
            <Route path='/sign-in' element={<SignIn/>}/>
            <Route path='/' element={<PrivateRoute/>}>
              <Route path='/' element={<MainScreen/>}/>
            </Route>
            <Route path="/edit-profile" element={<PrivateRoute/>}>
              <Route path="/edit-profile" element={<EditProfilePage/>}/>
            </Route>
            <Route path="/*" element={<PageNotFound/>}/>
            <Route path='/forgot-password' element={<ResetPassword/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
