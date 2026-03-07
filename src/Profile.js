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
      {/* <img  src={myimage1} className='join_img' />  */}
      <div className="text-center w-6/12 mx-auto p-16 bg-neutral-100 shadow-lg">
        <h5 className="modal-title" id="exampleModalLabel">
          Join Us Today
        </h5>

        <form className="p-10">
          <section className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="exampleInputEmail1" className="mb-1">Email address</label>
              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                type="email"
                id="exampleInputEmail1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="exampleInputPassword1" className="mb-1">Password</label>
              <input
                className="rounded-md border border-gray-300 px-3 py-2"
                type="password"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </section>
          <div className="mt-6">
            <button type="submit" onClick={signIn} className="bg-slate-800 text-white rounded-full py-2 px-6 hover:bg-slate-700 transition">
              Sign In
            </button>
          </div>
          <div>
            <Link to="/forgot">
              <button type="button" className="mt-2 text-sm text-blue-600 hover:underline">
                Forgot Password
              </button>
            </Link>
          </div>
          <div className="mt-4">
            <button type="button" onClick={register} className="bg-slate-300 rounded-full py-2 px-6 hover:bg-slate-400 transition">
              Create Account
            </button>
          </div>
        </form>
      </div>
      <Down />
    </div>
  );
}

export default Profile;
