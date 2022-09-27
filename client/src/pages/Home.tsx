import { useState, MouseEventHandler } from 'react';
import { Routes, Route} from "react-router-dom"

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

  const handleSidebar: MouseEventHandler<HTMLFormElement> = () => {
    setSidebar(!sidebar)
  }

  return (
      <div>
        <Navbar onClick={handleSidebar} />
        <Sidebar sidebar={sidebar} onClick={handleSidebar} />
        <Routes>
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Gallery />} />
            <Route path="/map" element={<Map />} />
            <Route path="/gallery" element={<Gallery />} />
          </Route>

        </Routes>
      </div>
  );
}

export default Home;
