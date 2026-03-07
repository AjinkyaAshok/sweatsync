import React, { useState } from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";
import { auth } from "./firebase";
import "./login.css";
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Forgot() {
  const [reset, setReset] = useState("");

  const actionCodeSettings = {
    // After password reset, the user will be give the ability to go back
    // to this page.
    url: window.location.origin,
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
    <div className='opacity'>
      <Headerplus />

     
{/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button> */}


      <form>
      <div className="forget__container form-group">
      <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          type="email"
          value={reset}
          onChange={(e) => setReset(e.target.value)}
        ></input>
        <button className="btn btn-dark btn__forgot" onClick={resetP} type="submit">
          Submit
        </button>
      </div>
      </form>
     

      <Down />
    </div>
  );
}

export default Forgot;
