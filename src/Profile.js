/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Headerplus from "./components/Header";
import Down from "./components/Down";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Profile() {
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
      {/* <img  src={myimage1} class='join_img' />  */}
      <div className="text-center w-6/12 mx-auto p-16 bg-neutral-100 shadow-lg">
        <h5 class="modal-title" id="exampleModalLabel">
          Join Us Today
        </h5>

        <form className="p-10">
          <section className="">
            <label for="exampleInputEmail1">Email address</label>
            <input
            className="ml-2 rounded-md"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="exampleInputPassword1">Password</label>
            <input
                className="rounded-md"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </section>
          <div>
            <button type="submit" onClick={signIn} data-dismiss="modal">
              Sign In
            </button>
          </div>
          <div>
            <Link to="/forgot">
              <button type="button" value="Refresh" onclick="history.go(0)">
                Forgot Password
              </button>
            </Link>
          </div>
        </form>
      </div>

      <div>
        <button type="submit" onClick={register}>
          Create Account
        </button>
      </div>
      <Down />
    </div>
  );
}

export default Profile;
