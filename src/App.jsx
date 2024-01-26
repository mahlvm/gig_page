import React, { useState } from 'react';
import Gig from "./components/Gig/Gig";
import Die from "./components/Die/Die";
import EventList from "./components/EventList/EventList";
import ironmaidenImg from "./assets/iron_maiden_2.jpg";
import background from "./assets/background.jpg";
import "./App.css";
import "./index.css";

function App() {

  return (
    <>
    <div id="container1">

      <div id="left">
        <img className="image" src={ironmaidenImg} alt="Iron Maiden" />
      </div>

      <div id="right">
        <Gig />
        <Die />
      </div>

    </div>

    <div id="container2">

      <div id="center">
        <EventList />
      </div>

    </div>
  </>

  );
}

export default App;
