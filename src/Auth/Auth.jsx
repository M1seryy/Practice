import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";
import { postRequest } from "../API";
import { Routes, Route, Link } from "react-router-dom";
import { Player } from "../PlayersComponent/Player";
import { Matches } from "../matches/Matches";

export const Auth = () => {
  // const USER_DATA = { id: "admin1", secret: "Pa$$w0rd" };

  let username = useRef("");
  let pass = useRef("");
  let usernameValue = username.current.value;
  let passValue = pass.current.value;

  let [token, setToken] = useState("");
  let [isAuth, setAuth] = useState(false);
  const [data, setData] = useState("");

  // const URL = "https://dev1-api.twelve.football/auth/login/username";

  let postFetch = () => {
    setToken(postRequest());
    console.log(token);

    if (token !== "") {
      setAuth(true);

      console.log(isAuth);
    }
  };
  let logOut = () => {
    setAuth(false);
  };
  if (isAuth === false) {
    return (
      <div className="wrap">
        <footer>
          <Link id="link-items" to="/">
            Sing In
          </Link>
          <Link id="link-items" to="/players">
            Players
          </Link>
          <Link id="link-items" to="/matches">
            matches
          </Link>
        </footer>
        <div id="cont" className="main-container">
          <h2 className="SingIn">Sing In</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              ref={username}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              ref={pass}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check"></div>
          <button onClick={postFetch} type="submit" class="btn btn-light">
            Submit
          </button>
        </div>

        <Routes>
          <Route path="/players" element={<Player />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </div>
    );
  } else if (isAuth === true) {
    return (
      <div className="wrap">
        <footer>
          <Link id="link-items" to="/">
            Sing In
          </Link>
          <Link id="link-items" to="/players">
            Players
          </Link>
          <button onClick={logOut} className="logOut">
            Log out
          </button>
          <Link id="link-items" to="/matches">
            matches
          </Link>
        </footer>
        <div id="cont" className="main-container">
          <h2 className="SingIn">{usernameValue}</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              ref={username}
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              ref={pass}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-check"></div>
          <button onClick={postFetch} type="submit" class="btn btn-light">
            Submit
          </button>
        </div>
        <Routes>
          <Route path="/players" element={<Player />} />
          <Route path="/matches" element={<Matches />} />
        </Routes>
      </div>
    );
  }
};
