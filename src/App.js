
import React, {useState} from 'react';
import {Map} from './Map';
import {CivicModal} from './Modal'
import './App.css';

function App() {
  const [data, setData] = useState(null)
  const [atDealer, setAtDealer] = useState(true);
  const [atTransit, setAtTransit] = useState(true);
  return (
    <>
      <label>In Transit<input type="checkbox" value={atTransit} checked={atTransit} onChange={()=>{setAtTransit(!atTransit)}} /></label>
      <label>At Dealer<input type="checkbox" value={atDealer} checked={atDealer} onChange={()=>{setAtDealer(!atDealer)}} /></label>
      <CivicModal onClose={()=>{setData(null)}} data={data}/>
      <Map setData={(data)=>{setData(data)}} atDealer={atDealer} atTransit={atTransit}/>
    </>
  );
}

export default App;
