import React from "react";
import "./player.css";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "./data";
import { useState } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Player = () => {
  const [selected, setSelected] = useState([]);

  console.log(selected);
  let getVal = (item) => {
    setSelected(item[0].label);
    console.log(selected);
    return item[0].label;
  };
  return (
    <div className="inputWrap">
      <Typeahead
        className="typeAhead"
        onChange={getVal}
        options={options}
        placeholder="Choose a state..."
      />

      {<h1>{selected}</h1>}
    </div>
  );
};
