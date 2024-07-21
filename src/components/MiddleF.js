/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import myimage from "./images/barbell.svg";
import myimage2 from "./images/coach.svg";
import myimage3 from "./images/dumbbell.svg";

function MiddleF() {
  return (
    <div className="px-16 py-20 shadow-2xl shadow-neutral-300">
      <div className="flex p-10 justify-evenly">
      <img className="h-20" src={myimage}></img>
        <p className="w-7/12">
          We're leading a movement to fight inactivity-related diseases by
          helping people achieve sustainable life changes that lead to more
          active, healthier lives.
        </p>

        
      </div>

      <div className="flex p-10 justify-evenly">
        <p className="w-7/12">
          Our NCCA-accredited Certification Programs set the highest industry
          standards and elevate the role of exercise professionals and health
          coaches in their community.
        </p>
        <img className="h-20"  src={myimage2}></img>
      </div>

      <div className="flex p-10 justify-evenly">
      <img className="h-20"  src={myimage3}></img>
        <p className="w-7/12">
          As a leading nonprofit, we are proud to advocate for policies that
          protect certified professionals and make physical activity more
          accessible to people everywhere.
        </p>
       
      </div>

      {/* <a
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
      </a> */}
    </div>
  );
}

export default MiddleF;
