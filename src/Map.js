import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
import { cars } from './cars';
const containerStyle = {
  width: `${window.screen.width}px`,
  height: `${window.screen.height-150}px`
};

const center = {
  lat: 39,
  lng: -98
};

 
export const Map = (props) => {
  let dedupe = {}
  let resCars = cars.filter(car=>{
      if (dedupe[car.state+car.name]){
          return false
      }
      dedupe[car.state+car.name] = true;
      if (props.onlyYellow && car.color !== "Phoenix Yellow"){
          return false;
      }

      if (props.atDealer && props.atTransit) return true;

      if (props.atDealer){
          return car.atDealer === true;
      }
      if (props.atTransit){
        return car.atDealer !== true;
      }
      
      return false;
  })
  console.log(resCars.length)
  const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }
  
  return (
    <LoadScript googleMapsApiKey="AIzaSyA4osQxlfnZEX-CUfopRAxP31PckDPX8vw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
       >
          
        <MarkerClusterer options={options}>
            {(clusterer)=>{
                return resCars.map((marker, i) =>
                (
                    <Marker 
                        clusterer={clusterer}
                        position={marker.location}
                        clickableIcons={true}
                        onClick = {() => {props.setData(marker)}}
                    />

                ))}
            }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  )
}
