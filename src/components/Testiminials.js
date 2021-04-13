import React from "react";
// import styled from "styled-components";
import myimage from "./images/download (1).jpg";

function Testinimial() {
  return (
    <div class="testinomials-2">
      
        <div class="test-img-2">
          {" "}
          <img src={myimage} alt="testinomials.png"></img>
        </div>
        <div class="test-text-2">
          <h1 id="text-head-2">HIDING IN PLAIN SIGHT</h1>
          <p>
            With a small footprint and elegant design, The Mirror blends
            seamlessly into your home. All you need is two feet of wall space to
            turn anytwo feet of wall space to
            turn any room into a complete home gym.
          </p>
          <button id="test-button-2" type="button" class="btn btn-dark">
            HOW IT WORKS
          </button>
        </div>

      
    </div>
  );
}

export default Testinimial;

// const TestWraper = styled.div``
// `
//   display: flex;
//   align-items: center;
//   width: auto;
//   padding: 10%;
// `;
// const Button = styled.button
// `background: none;
// border-width: 2px;
// border-radius: 2px;
// border-style: solid;
// border-color: #2b2b2b;
// color: #2b2b2b;
// padding: 1rem 2rem;
// min-width: 16rem;
// text-transform: uppercase;
// transition: all 200ms ease;
// text-decoration: none;
// letter-spacing: 3px;
// font-size: 1rem;
// `

// const IMG = styled.img
// `
// flex: 0 0 auto;
// padding: 0;

// `;

// const P = styled.p
// `
//   line-height: 2;
//   display: block;
//   margin-block-start: 1em;
//   margin-block-end: 1.5em;
//   margin-inline-start: 0px;
//   margin-inline-end: 200px;
//   text-align: left;
//   text-align: justify;
// `;
