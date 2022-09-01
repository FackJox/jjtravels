import React, { useState } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"

import PrivateRoute from "../components/PrivateRoute"
import { setAuthToken } from '../helpers/setAuthToken';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Map from '../components/Map/Map'
import Gallery from '../components/Gallery';


function Home() {
  const token = localStorage.getItem("token")
  if (token) {
    setAuthToken(token)
  }

  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
      <div>
        <Navbar onClick={handleSidebar} />
        <Sidebar sidebar={sidebar} onClick={handleSidebar} />
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Gallery />} />
            <Route path="/map" element={<Map />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>

        </Routes>
      </div>
  );
}

export default Home;
