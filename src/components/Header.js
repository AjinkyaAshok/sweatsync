/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

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

  return (
    <div className="flex items-center justify-around mt-6 mx-6 ">
      <p className="font-bold text-2xl #FE7F24">SWEAT SYNC</p>

      <nav class=" bg-slate-100 rounded-full w-2/6 text-lg  mx-auto shadow-sm h-12">
        <ul class="flex justify-between m-0.5">
          <li className=" hover:bg-white hover:rounded-3xl py-2 px-8 ">
            <Link to="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li className=" hover:bg-white hover:rounded-3xl py-2 px-8">
            <Link to="/workoutplans">Plans</Link>
          </li>
          <li className=" hover:bg-white hover:rounded-3xl py-2 px-8">
            <Link to="/reviews">Reviews</Link>
          </li>
          <li className="  hover:bg-white hover:rounded-3xl py-2 px-8 ">
            <Link to="/trials">Trials</Link>
          </li>
        </ul>
      </nav>

      <button className=" hover:shadow-inner bg-slate-300  rounded-full py-2.5 px-9 hover:transform transition duration-250 hover:scale-95">
        <Link
          type="button"
          data-toggle="modal"
          data-target="#exampleModal1"
          to="/join"
        >
          Join
        </Link>
      </button>
    </div>
  );
}

export default Header;
