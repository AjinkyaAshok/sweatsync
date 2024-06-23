import React from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";
import myimage from "./components/images/cedric.png";
import myimage1 from "./components/images/scott.png";

function Reviews() {
  return (
    <div>
      <Headerplus />
      <div>
        <div class="media">
          <img
            src={myimage1}
            class="align-self-center mr-3 img-reviews"
            alt="..."
          ></img>
          <div class="media-body">
            <h5 class="mt-0">Scott Goudeseune</h5>
            <p class="mt-0">
              Chief Executive Officer, American Council on Exercise
            </p>
            <p>
              Since 1985, ACE has been on a journey to evolve and help shape the
              fitness industry. From our early focus on group fitness and dance
              aerobics to the current, comprehensive approach centered on
              behavior change and health coaching, we are proud to support our
              family of more than 90,000 ACE Certified exercise professionals
              and health coaches to get millions of people moving worldwide.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="media">
          <img
            src={myimage}
            class="align-self-center mr-3 img-reviews"
            alt="..."
          ></img>
          <div class="media-body">
            <h5 class="mt-0">Cedric X. Bryant, PhD, FACSM</h5>
            <p class="mt-0">
              President & Chief Science Officer, American Council on Exercise
            </p>
            <p>
              One of ACE's core values is collaboration and connection, and we
              are proud to practice this every day though our work with diverse
              partners who help us advance our mission of encouraging people
              from all walks of life to make healthy, sustainable lifestyle
              changes.
            </p>
            
          </div>
        </div>
      </div>
      <div>
        <div class="media">
          <img
            src={myimage1}
            class="align-self-center mr-3 img-reviews"
            alt="..."
          ></img>
          <div class="media-body">
            <h5 class="mt-0">Top-aligned media</h5>
            <p class="mt-0">
              Chief Executive Officer, American Council on Exercise
            </p>
            <p>
              I’m gon’ put her in a coma. You give a hundred reasons why, and
              you say you're really gonna try. So I sat quietly, agreed
              politely. Suiting up for my crowning battle. And on my 18th
              Birthday we got matching tattoos. So très chic, yeah, she's a
              classic. I am ready for the road less traveled.
            </p>
           
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default Reviews;
