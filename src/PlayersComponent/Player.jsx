import React from "react";
import "./player.css";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "./data";
import { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Player = () => {
  const [selected, setSelected] = useState([]);
  const [name, setName] = useState([]);
  const [last, setLast] = useState([]);
  const [team, setTeam] = useState([]);

  console.log(name);
  let getVal = (item) => {
    setName(item[0].label);
    // console.log(name);
    setLast(item[0].last_name);
    // console.log(last);
    // return item[0].label;
    setTeam(item[0].team);
  };
  return (
    <div className="inputWrap">
      <Typeahead
        className="typeAhead"
        onChange={getVal}
        options={options}
        placeholder="Choose a state..."
      />
      {<h1>Name: {name}</h1>}
      {<h1>Last name: {last}</h1>}
      {<h1>Team: {team}</h1>}
    </div>
  );
};
