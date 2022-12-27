import React from 'react'
import AuthProvider from './context/authContext';
import { Route, Routes } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer';
// import RequireAuth from './components/RequiresAuth';
import HomeContainer from './containers/HomeContainer';


function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path='/auth/login'
          element={
            <LoginContainer />
          }
        />
        <Route
          path='/'
          element={
            <HomeContainer />
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
