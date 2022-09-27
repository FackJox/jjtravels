import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import routeData from './route.json'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon


const Map = () => {

  const filteredCountries = routeData.features.filter(route => route.properties.Country === "Spain")

  return (
    <div>
    <MapContainer center={[40.463667, -3.74922]} zoom={6} scrollWheelZoom={true} style={{ height: '100vh', width: '100wh', zIndex: '10', }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredCountries.map(route => (
        <Marker
          key={route.properties.Name}
          position={[route.geometry.coordinates[1], route.geometry.coordinates[0]]}>

          <Popup position={[route.geometry.coordinates[1], route.geometry.coordinates[0]]}>
            <div>
              <h2>{"Name: " + route.properties.Name}</h2>
              <p>{"Country: " + route.properties.Country}</p>
              <p>{"Notes: " + route.properties.Notes}</p>
            </div>
          </Popup>

        </Marker>
      ))}

    </MapContainer>
    </div>

  )
}

export default Map