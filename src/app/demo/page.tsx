"use client";
import React, { useState } from "react";
import LightBulbComponent from "../Room/Room";
import Nav from "../nav/Nav";




export default function DemoPage() {
  const [lightOn, setLightOn] = useState(true);
  const [fanOn, setFanOn] = useState(false);
  const [tvOn, setTvOn] = useState(true);

  return (
    <>
      <h1>Smart Home Demo</h1>
      {/* <SmartHomeRoom lightOn={lightOn} fanOn={fanOn} tvOn={tvOn} /> */}
      <Nav />
      <LightBulbComponent />
      
    </>
  );
}

