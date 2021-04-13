import React, { useState } from "react";
import Headerplus from "./components/Headerplus";
import Down from "./components/Down";
import LinearBuffer from "./components/Buffer";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";
import myimage1 from "./components/images/joshua-jordan-ZfiV8EgglsY-unsplash.jpg";


function Join() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
        window.alert("Successfully Logged In!");
      })
      .catch((error) => alert(error.message));
      // firebase login
    };
    
    const register = (e) => {
      e.preventDefault();
      
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
          window.alert("Created Successfully!");
        }
          

        console.log(auth);
      })

      .catch((error) => alert(error.message));
  };
  const [reset, setReset] = useState("");

  const resetP = (e) => {
    e.preventDefault();
    auth
      .sendPasswordResetEmail(reset)
      .then((auth) => {
          // history.push("/");
        window.alert("Your password reset email has been sent");
      })
      .catch((error) => alert(error.message));
  };

  return (
   

    <div>
      <Headerplus />
      <img  src={myimage1} class='join_img' /> 
{/*      
      <form className="signin__container">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            placeholder="example@gmail.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
            id="exampleInputPassword1"
          />
          <div>
            <button
              class="btn btn-primary signin__button"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
          
          <button
            class="btn btn-dark create__button"
            type="submit"
            onClick={register}
          >
            Create Account
          </button>
        </div>
        <div>
        <Link to="/forgot">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal2" class="btn btn-dark forgot_button">Forgot Password</button>
        </Link>
        






      <div className="forget__container">
        <h5>Enter your email</h5>
        <input
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          type="text"
          value={reset}
          onChange={(e) => setReset(e.target.value)}
        ></input>
        <button class="btn btn-dark" onClick={resetP} type="submit">
          Submit
        </button>
      </div>
     

        </div>
      </form> */}

      <Down />
    </div>
  );
}

export default Join;
