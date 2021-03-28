
import React, {useState} from 'react';
import {Map} from './Map';
import {CivicModal} from './Modal'
import './App.css';
const querystring = require('querystring');

function App() {
  const [data, setData] = useState(null)
  const [atDealer, setAtDealer] = useState(true);
  const [atTransit, setAtTransit] = useState(true);
  const [onlyYellow, setOnlyYellow] = useState(false);
  let qs = window.location.search ? window.location.search.substring(1) : null;
  qs = querystring.parse(qs)
  let colorSearch = qs ? qs['color'] : null;

  return (
    <>
      <label>In Transit<input type="checkbox" value={atTransit} checked={atTransit} onChange={()=>{setAtTransit(!atTransit)}} /></label>
      <label>At Dealer<input type="checkbox" value={atDealer} checked={atDealer} onChange={()=>{setAtDealer(!atDealer)}} /></label>
      <label>Only LE<input type="checkbox" value={onlyYellow} checked={onlyYellow} onChange={()=>{setOnlyYellow(!onlyYellow)}} /></label>
      <CivicModal onClose={()=>{setData(null)}} data={data}/>
      <Map setData={(data)=>{setData(data)}} atDealer={atDealer} atTransit={atTransit} onlyYellow={onlyYellow} color={colorSearch} />
    </>
  );
}

export default App;
