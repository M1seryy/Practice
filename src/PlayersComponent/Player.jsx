import React from "react";
import "./player.css";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "./data";
import { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Player = () => {
  // let getFetch = () => {
  //   const getURL = "https://dev1-api.twelve.football/admin/players";
  //   axios.get(getURL).then(function (response) {
  //     console.log(response);
  //   });
  // };

  const [selected, setSelected] = useState([]);
  const [hide, setHide] = useState(true);
  const [name, setName] = useState([]);
  const [last, setLast] = useState([]);
  const [team, setTeam] = useState([]);
  const [position, setPosition] = useState([]);

  console.log(name);
  let getVal = (item) => {
    setHide(false);
    setName(item[0].label);
    // console.log(name);
    setLast(item[0].last_name);
    // console.log(last);
    // return item[0].label;
    setTeam(item[0].team);
    setPosition(item[0].position);
  };
  return (
    <div className="inputWrap">
      <Typeahead
        className="typeAhead"
        onChange={getVal}
        options={options}
        placeholder="Choose a state..."
      />

      {hide === false ? (
        <div className="">
          <hr />
          <div className="photo">
            <div className="icon"></div>
            <input className="inputPhoto" type="file" />
          </div>
          <label className="name">Name</label> <br />
          <label className="nameVal">{name}</label>
          <hr />
          <label className="LastNmae">Last name</label> <br />
          <label>{last}</label>
          <hr />
          <label className="team">Team</label>
          <br />
          <label>{team}</label>
          <hr />
          <label className="position">Position</label>
          <br />
          <label>{position}</label>
          <hr />
        </div>
      ) : null}
    </div>
  );
};
