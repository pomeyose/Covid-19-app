
import "./App.css";
import React from "react";
import { useState ,useEffect} from "react";

  const App =()=>{
  const [confirmed, setConfirmed]= useState("");
  const [recovered, setRecovered]= useState("");
  const [deaths, setDeaths]= useState("");
  
useEffect(()=>{
  fetch("https://covid-api.com/api/reports/total?data=2020-04-07")
  .then((responseData)=>responseData.json()).then((data) =>{
    setConfirmed(data.data.confirmed);
    setRecovered(data.data.recovered);
    setDeaths(data.data.deaths);

  })
})



  

  return (
    <div className="App">
      <h1>Covid-19 Tracker</h1>
<div className="general">

      <div className="card">
        <label style={{color:"blue"}}>Confirmed</label>
        <p style={{color:"blue"}}>{confirmed}</p>
      </div>
      <div className="card">
        <label style={{color:"green"}}>Recovered</label>
        <p style={{color:"green"}}>{recovered}</p>
      </div>
      <div className="card">
        <label style={{color:"red"}}>Death</label>
        <p style={{color:"red"}}>{deaths}</p>
      </div>
      </div>
    </div>
  );
}

export default App;
