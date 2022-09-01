import React from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import PrivateRoute from "./components/PrivateRoute"
import Home from "./pages/Home"
import LoginPage from "./pages/Login"
import SignupPage from './pages/Signup'
import { setAuthToken } from './helpers/setAuthToken';
import { history } from "./helpers/history"

import Map from "./components/Map/Map"
import Gallery from "./components/Gallery"

function App() {
  const token = localStorage.getItem("token")
  if (token) {
    setAuthToken(token)
  }

  return (
    <BrowserRouter history={history}>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} >
            <Route path="/" element={<Map />} />
            <Route path="/map" element={<Map />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
