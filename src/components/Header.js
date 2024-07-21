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
    <nav class="p-3 shadow-md  ">
      <div className="flex justify-center">
        {/* <img
          className="col-span-1 h-8 ml-2 justify-self-center"
          src={myimage}
        ></img> */}
        <p className="font-semibold text-2xl justify-self-center mr-6">
          Sweat Sync
        </p>

        <ul class="flex gap-0 justify-self-center">
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
            <Link
              type="button"      
              data-toggle="modal"
              data-target="#exampleModal1"
              to="/join"
            >
             Profile
            </Link>
          </li>
        </ul>
      </div>

     
    </nav>
  );
}

export default Header;
