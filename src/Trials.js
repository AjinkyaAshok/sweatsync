/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";

function Trials() {
  return (
    <div>
      <Headerplus />
      <div>
        <div className="jumbotron jumbotron-trials">
          <h1 className="display-4">Start your trial today!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4"></hr>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a className="btn btn-dark btn-lg" href="#" role="button">
            Start Trial
          </a>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default Trials;
