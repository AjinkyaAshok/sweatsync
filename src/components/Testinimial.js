import React from "react";
// import styled from "styled-components";
import myimage2 from "./images/collab-logo-aphn.jpg";
import myimage from "./images/collab-logo-paa.jpg";

function Testinimial() {
  return (
    <ul class="list-unstyled test_para">
      <li class="media">
        <div class="media-body">
          <h3 class="mt-0 mb-1">Physical Activity Alliance</h3>
          <p>
            As an active partner in the Physical Activity Alliance, ACE works
            alongside other leading health nonprofits in the United States whose
            goal is to make physical-activity opportunities safe and accessible
            for all Americans. By combining forces, the Physical Activity
            Alliance advocates for specific policies to make this goal a reality
            and acts as expert advisory group to state and federal legislators.
          </p>
        </div>
        <img  src={myimage} class="ml-3 test-img" alt="..." />
      </li>
      <li class="media my-4">
        <img  src={myimage2} class="mr-3 test-img" alt="..." />
        <div class="media-body">
          <h3 class="mt-0 mb-1">Active People, Healthy Nation</h3>
          <p>
            ACE is a proud supporter of Active People, Healthy NationSM, a
            Centers for Disease Control and Prevention (CDC) Initiative that
            seeks to help 27 million Americans become more physically active by
            2027 by promoting effective strategies that work. Through a series
            of blog posts directed to exercise professionals and health coaches,
            ACE equips this audience to recognize the importance of Active
            People, Healthy Nation and how their work is critical in reaching
            this goal.
          </p>
        </div>
      </li>
    </ul>
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
