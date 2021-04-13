import React, { useState } from "react";
import styled from "styled-components";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
// import { useState } from "../Join";
import { auth } from "../firebase";
import {  useHistory } from "react-router-dom";
// import myimage from "./images/dumbbell (1).svg";
import myimage from "./images/running.svg";



// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Headerplus() {
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

  // const [email, setEmail] = useState("");

  // const [email, setEmail] = useState('');

  // const handleAuthentication = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  return (
    <div>
      {/* <div class="alert alert-dark alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> You should check in on some of those
        fields below.
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div> */}

      <NavWrapper>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          {/* <FitnessCenterIcon /> */}
          <img src={myimage} class="head-icon"></img>
          <h1 class="logo-text">Real Steel Fitness Club</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/workoutplans">
                  Workout Plans
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/reviews">
                  Reviews
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/trials">
                  Trials
                </Link>
              </li>
            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/contactus">
                  Contact Us <span class="sr-only">(current)</span>
                </Link>
              </li>
              {/* <li class="nav-item">
                <div onClick={handleAuthentication}></div>
                <span>Hello {!user ? "Guest" : user.email}</span>
                <span>{user ? "Sign Out" : "Sign In"}</span>
                {/* <Link class="nav-link" to="/contactus">
                  Hello Guest <span class="sr-only">(current)</span>
                </Link> */}
              {/* </li> */}
              <li class="nav-item">
                <Link  type="button" class="btn btn-light" data-toggle="modal" data-target="#exampleModal1"  to="/join">
                  <AccountBoxIcon /> Sign in & Accounts                  
                </Link>
               



<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign in</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
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
              class="btn btn-dark signin__button"
              type="submit"
              onClick={signIn}
              data-dismiss="modal"
            >
              Sign In
            </button>
          </div>
          
          {/* <button
            class="btn btn-dark create__button"
            type="submit"
            onClick={register}
            data-dismiss="modal"
          >
            Create Account
          </button> */}
        </div>
      </form>
      </div>
      <div class="modal-footer">
        {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
        <button type="submit" onClick={register}
            data-dismiss="modal" class="btn btn-dark">Create Account</button>
      <div>
           

        



      <Link to="/forgot">
          <button type="button" class=" btn btn-secondary" value = "Refresh" onclick="history.go(0)"   data-toggle="modal" data-target="#exampleModal" >Forgot Password</button>
        </Link>






      {/* <div className="forget__container">
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
      </div> */}








        </div>
      </div>
    </div>
  </div>
</div>
              </li>
            </ul>
          </div>
        </nav>
      </NavWrapper>
    </div>
  );
}

export default Headerplus;

const NavWrapper = styled.nav`
  margin-top: 0;
  padding: 0;
`;
