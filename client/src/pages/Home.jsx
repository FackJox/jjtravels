import React, { useState } from 'react';
import { Outlet } from "react-router-dom"

import { setAuthToken } from '../helpers/setAuthToken';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'

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
    <>
      <Navbar onClick={handleSidebar} />
      <Sidebar sidebar={sidebar} onClick={handleSidebar} />
      <Outlet />
    </>
  );
}

export default Home;
