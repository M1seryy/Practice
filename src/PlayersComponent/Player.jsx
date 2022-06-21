import React from "react";
import "./player.css";
import { Typeahead } from "react-bootstrap-typeahead";
import options from "./data";
import { useState } from "react";
import axios from "axios";

export const Player = () => {
  const [selected, setSelected] = useState([]);
  console.log(selected);

  return (
    <div className="inputWrap">
      <Typeahead
        className="typeAhead"
        onChange={setSelected}
        options={options}
        placeholder="Choose a state..."
        selected={selected}
      />
      {selected !== "" ? <h1>{selected[0].label}</h1> : null}
    </div>
  );
};
