/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import myimage1 from "./images/running.svg";

function Down() {
  return (
    <div className="fixed-bottom ">
      <footer className="py-8 flex justify-center gap-28">
        <div className=" text-center">
          <img src={myimage1} className="h-8 mx-auto"></img>

          <small class="d-block mb-3 text-muted">&copy; 2020-2021</small>
        </div>

        <div class="col-6 col-md">
          <h5>Home</h5>
          <ul class="list-unstyled text-small">
            <li>
              <a class="text-muted" href="#">
                Workout Plans
              </a>
            </li>
            <li>
              <a class="text-muted" href="#">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        <div class="col-6 col-md">
          <ul class="list-unstyled text-small">
            <li>
              <h6 class="text-muted" href="#">
                <MailOutlineIcon /> real@fitness.com
              </h6>
            </li>
            <li>
              <h6 class="text-muted" href="#">
                <CallIcon /> 9090909090
              </h6>
            </li>
          </ul>
        </div>
      </footer>

      <a href="http://www.linkedin.in/in/ajinkyaa" target="_blank" rel="noreferrer">
        <p class="text-center">-Ajinkya Ashok</p>
      </a>
    </div>
  );
}

export default Down;
