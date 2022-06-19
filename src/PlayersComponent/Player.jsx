import React from "react";
import "./player.css";
import { Typeahead } from "react-bootstrap-typeahead";

export const Player = () => {
  return (
    <div className="inputWrap">
      <Typeahead
        className="typeAhead"
        id="basic-example"
        placeholder="Choose a state..."
      />
    </div>
  );
};
