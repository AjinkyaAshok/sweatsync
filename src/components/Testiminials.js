import React from "react";
// import styled from "styled-components";
import myimage from "./images/download (1).jpg";

function Testinimial() {
  return (
    <div className="testinomials-2">
      
        <div className="test-img-2">
          <img src={myimage} alt="testinomials.png"></img>
        </div>
        <div className="test-text-2">
          <h1 id="text-head-2">HIDING IN PLAIN SIGHT</h1>
          <p>
            With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn any room into a complete home gym.
          </p>
          <button id="test-button-2" type="button" className="btn btn-dark">
            HOW IT WORKS
          </button>
        </div>

      
    </div>
  );
}

export default Testinimial;

