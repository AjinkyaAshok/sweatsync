import React from "react";
import myimage from "./images/barbell.svg";
import myimage2 from "./images/coach.svg";
import myimage3 from "./images/dumbbell.svg";

function MiddleF() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide col-lg-12"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
            We're leading a movement to fight inactivity-related diseases by
            helping people achieve sustainable life changes that lead to more
            active, healthier lives.
          </p>

          <img class="cara-img" src={myimage}></img>
        </div>

        <div class="carousel-item">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
            Our NCCA-accredited Certification Programs set the highest industry
            standards and elevate the role of exercise professionals and health
            coaches in their community.
          </p>
          <img class="cara-img" src={myimage2}></img>
        </div>
        <div class="carousel-item">
          {/* <img src="..." class="d-block w-100" alt="..."> */}
          <p class="carosusel-para">
            As a leading nonprofit, we are proud to advocate for policies that
            protect certified professionals and make physical activity more
            accessible to people everywhere.
          </p>
          <img class="cara-img" src={myimage3}></img>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default MiddleF;
