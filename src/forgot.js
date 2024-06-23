import React, { useState } from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";
import { auth } from "./firebase";
import "./login.css";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Forgot() {
  const [reset, setReset] = useState("");

  var actionCodeSettings = {
    // After password reset, the user will be give the ability to go back
    // to this page.
    url: 'http://localhost:3000',
    // url:'https://real-steel-fitness.herokuapp.com/join'
    handleCodeInApp: false
  };

  const resetP = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(reset, actionCodeSettings)
      .then((auth) => {
          // history.push("/");
        window.alert("Your password reset email has been sent");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div class='opacity'>
      <Headerplus />

     
{/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}


      <form>
      <div className="forget__container form-group">
      <label for="exampleInputEmail1">Email address</label>
        <input
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          type="text"
          value={reset}
          onChange={(e) => setReset(e.target.value)}
        ></input>
        <button class="btn btn-dark btn__forgot" onClick={resetP} type="submit">
          Submit
        </button>
      </div>
      </form>
     

      <Down />
    </div>
  );
}

export default Forgot;