import React from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";

export const Auth = () => {
  const USER_DATA = { id: "admin1", secret: "Pa$$w0rd" };
  let [token, setToken] = useState("");
  let [isAuth, setAuth] = useState(false);
  const [data, setData] = useState("");
  const URL = "https://dev1-api.twelve.football/auth/login/username";
  let postFetch = () => {
    axios.post(URL, USER_DATA).then((response) => {
      setData(response.data);
      console.log(data);

      console.log(data.accessToken);
    });
    setToken(data.accessToken);
    if (token !== "") {
      setAuth(!isAuth);
      console.log(isAuth);
    }
  };
  let logOut = () => {
    setAuth(false);
  };
  if (isAuth == false) {
    return (
      <div className="wrap">
        <footer></footer>
        <div id="cont" className="main-container">
          <h2 className="SingIn">Sing In</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
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
      </div>
    );
  } else {
    return (
      <div className="wrap">
        <footer>
          <button onClick={logOut} className="logOut">
            Log out
          </button>
        </footer>
        <div id="cont" className="main-container">
          <h2 className="SingIn">{data.username}</h2>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
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
      </div>
    );
  }
};
