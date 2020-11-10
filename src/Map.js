import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
  const [map, setMap] = React.useState(null)
 
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  let resCars = cars.filter(car=>{
      if (props.atDealer && props.atTransit) return true;

      if (props.atDealer){
          return car.atDealer === true;
      }
      if (props.atTransit){
        return car.atDealer !== true;
      }
      return false;
  })
 
  return (
    <LoadScript googleMapsApiKey="AIzaSyA4osQxlfnZEX-CUfopRAxP31PckDPX8vw">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
       >
          
        <>
            {resCars.map((marker, i) =>{
              return(
                <Marker 
                    position={marker.location}
                    clickableIcons={true}
                    onClick = {() => {props.setData(marker)}}
                />

               )
            })}
        </>
      </GoogleMap>
    </LoadScript>
  )
}
