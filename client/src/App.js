import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import Map from './pages/Map/Map'
import Gallery from './pages/Gallery';
import Login from './pages/Login'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


function App() {
  const [sidebar, setSidebar] = useState(false)

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <BrowserRouter>
    <div>
      <Navbar onClick={handleSidebar}/>
      <Sidebar sidebar={sidebar} onClick={handleSidebar}/>
      <Routes>
      <Route path="/" element={<Map />} />
      <Route path="/map" element={<Map />} />
      <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
