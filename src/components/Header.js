/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styled from "styled-components";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
// import { useState } from "../Join";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
// import myimage from "./images/dumbbell (1).svg";
import myimage from "./images/running.svg";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
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
    <nav class="p-3 shadow-md  ">
      <div className="grid grid-flow-col">
        <img
          className="col-span-1 h-8 ml-2 justify-self-center"
          src={myimage}
        ></img>
        <ul class="col-span-8 flex gap-2">
          <li className="px-2 py-1  hover:bg-gray-200 hover:rounded-sm">
            <Link to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className="px-2 py-1  hover:bg-gray-200 hover:rounded-sm">
            <Link to="/workoutplans">Plans</Link>
          </li>
          <li className="px-2 py-1  hover:bg-gray-200 hover:rounded-sm">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="px-2 py-1  hover:bg-gray-200 hover:rounded-sm">
            <Link to="/trials">Trials</Link>
          </li>
          <li className="px-2 py-1  hover:bg-gray-200 hover:rounded-sm">
            <Link to="/contactus">
              Contact Us <span>(current)</span>
            </Link>
          </li>
        </ul>

        <p className="col-span-3 justify-self-end mr-4">Swear Sync</p>
      </div>
      {/* <ul> */}
      {/* <li >
              <Link
                type="button"
                class="btn btn-light"
                data-toggle="modal"
                data-target="#exampleModal1"
                to="/join"
              >
                <AccountBoxIcon /> Sign in & Accounts
              </Link>

              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Sign in
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
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
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="submit"
                        onClick={register}
                        data-dismiss="modal"
                        class="btn btn-dark"
                      >
                        Create Account
                      </button>
                      <div>
                        <Link to="/forgot">
                          <button
                            type="button"
                            class=" btn btn-secondary"
                            value="Refresh"
                            onclick="history.go(0)"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            Forgot Password
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li> */}
      {/* </ul> */}
    </nav>
  );
}

export default Header;
