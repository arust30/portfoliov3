import React from "react";
import "./styling/wave.css";

function Wave() {
  return (
    <>
      <div id="header" className="pt-20 bg-primary overflow-hidden"></div>
      <div class="wave overflow-hidden"></div>
      <div class="wave overflow-hidden"></div>
      {/* <div class="reversed-wave"></div>
      <div class="reversed-wave"></div> */}
      <div className="bg-primary pb-40 overflow-hidden"></div>
    </>
  );
}

export default Wave;
