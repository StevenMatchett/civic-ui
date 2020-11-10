
import React, {useState} from 'react';
import {Map} from './Map';
import {CivicModal} from './Modal'
import './App.css';

function App() {
  const [data, setData] = useState(null)
  return (
    <>
      <CivicModal onClose={()=>{setData(null)}} data={data}/>
      <Map setData={(data)=>{setData(data)}}/>
    </>
  );
}

export default App;
