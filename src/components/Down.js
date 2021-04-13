import React from "react";
import styled from "styled-components";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import myimage1 from "./images/running.svg";


function Down() {
  return (
    <DownWrapper>
      <div>
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          {/* <h1 class="display-4">Pricing</h1>
          <p class="lead">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It's built with default
            Bootstrap components and utilities with little customization.
          </p> */}
        </div>

        <div class="container">
          <div class="card-deck mb-3 text-center">
            {/* <div class="card mb-4 box-shadow"> */}
            {/* <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $15 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Get started
                </button>
              </div>
            </div>
            <div class="card mb-4 box-shadow">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $29 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Contact us
                </button>
              </div> */}
            {/* </div> */}
          </div>
          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col-12 col-md">
                {/* <FitnessCenterIcon /> */}
                <img src={myimage1} class="head-iconF"></img>
              
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
                <h5>___</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Trials
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                       Franchise
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-6 col-md">
                <h5>Contact Us</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <h6 class="text-muted" href="#">
                      <MailOutlineIcon />   real@fitness.com
                    </h6>
                  </li>
                  <li>
                    <h6 class="text-muted" href="#">
                      <CallIcon /> 9090909090
                    </h6>
                  </li>
                  <li>
                    <h6 class="text-muted" href="#">
                      <WhatsAppIcon /> 9090909099
                    </h6>
                  </li>
                </ul>
              </div>
            </div>
                <p class=" text-muted managed-text">
                  <EqualizerIcon /> Managed By <a class=" text-muted" href="http://www.linkedin.in/in/ajinkyaa">AjinkyaAshok</a>
                </p>
          </footer>
        </div>
      </div>
    </DownWrapper>
  );
}

export default Down;

const DownWrapper = styled.div``;
