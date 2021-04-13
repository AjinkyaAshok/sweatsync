import React from "react";
import Headerplus from "./components/Headerplus";
import Down from "./components/Down";

function Trials() {
  return (
    <div>
      <Headerplus />
      <div>
        <div class="jumbotron jumbotron-trials">
          <h1 class="display-4">Start your trial today!</h1>
          <p class="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr class="my-4"></hr>
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <a class="btn btn-dark btn-lg" href="#" role="button">
            Start Trial
          </a>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default Trials;
