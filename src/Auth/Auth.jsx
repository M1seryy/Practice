import React from "react";
import { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./auth.css";

export const Auth = () => {
  const USER_DATA = { id: "admin1", secret: "Pa$$w0rd" };
  const [data, setData] = useState("");
  const URL = "https://dev1-api.twelve.football/auth/login/username";
  let postFetch = () => {
    axios.post(URL, USER_DATA).then((response) => {
      setData(response.data);
      console.log(data);
    }).catch((error) => console.error(error));
  };
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
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={postFetch} type="submit" class="btn btn-light">
          Submit
        </button>
      </div>
    </div>
  );
};
