import React from "react";
import Headerplus from "./components/Headerplus";
import Down from "./components/Down";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

function ContactUs() {
  return (
    <div>
      <Headerplus />
      <div>
        <div class="jumbotron jumbotron-fluid">
          <div class="container">
            <h1 class="display-4">Get in touch!</h1>
            <p class="lead">
              <MailOutlineIcon /> <a class="text-muted" href="mailto:real@fitnessclub.com">real@fitnessclub.com</a> 
            </p>
            <p class="lead">
              <CallIcon /> 9090909090
            </p>
            <p class="lead">
              <WhatsAppIcon /> 9090909099
            </p>
          </div>
        </div>
      </div>
      <Down />
    </div>
  );
}

export default ContactUs;
