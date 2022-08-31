import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import SignupPage from './pages/Signup'
import { setAuthToken } from './helpers/setAuthToken';
import { history } from "./helpers/history"

import Upload from "./components/Upload"

function App() {
  const token = localStorage.getItem("token")
  if (token) {
    setAuthToken(token)
  }

  return (
    // <BrowserRouter history={history}>
    //   <Routes>
    //     <Route exact path="/" element={<PrivateRoute />}>
    //      <Route exact path="/" element={<Home />} />
    //     </Route>
    //     <Route path="/login" element={<LoginPage />} />
    //     <Route path="/signup" element={<SignupPage />} />
    //   </Routes>
    // </BrowserRouter>
    <Upload />
  );
}

export default App;
