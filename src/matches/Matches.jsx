import React from "react";
import "./matches.css";
import { Typeahead } from "react-bootstrap-typeahead";
import { useState } from "react";
import matchesData from "./matchesData";

export const Matches = () => {
  const [hide, setHide] = useState(true);
  const [selected, setSelected] = useState([]);
  const [teamOne, setTeamOne] = useState([]);
  const [teamTwo, setTeamTwo] = useState([]);
  const [stage, setStage] = useState([]);
  const [time, setTime] = useState([]);
  const [round, setRound] = useState([]);
  const [score, setScore] = useState([]);

  let getVal = (item) => {
    setHide(false);
    setTeamOne(item[0].team1);
    setTeamTwo(item[0].team2);
    setStage(item[0].stage);
    setTime(item[0].label);
    setRound(item[0].round);
    setScore(item[0].score.ft);
  };
  return (
    <div className="matches">
      <Typeahead
        className="typeAhead"
        onChange={getVal}
        options={matchesData}
        placeholder="Choose a match..."
      />
      {hide === false ? (
        <div>
          <hr />
          <label className="textSize">
            {teamOne} vs {teamTwo}
          </label>
          <br />
          <label>{stage}</label>
          <hr />
          <label className="textSize">
            Kickoff <label className="time">{time}</label>
          </label>
          <hr />
          <br />
          <label className="textSize">
            Round <label className="time">{round}</label>
          </label>
          <hr />
          <br />
          <label className="textSize">
            Score <label className="score">{score.join(":")}</label>
          </label>
          <hr />
          <br />
          <label className="textSize">
            Team 1 <label className="team1">{teamOne}</label>
          </label>
          <hr />
          <br />
          <label className="textSize">
            Team 2 <label className="team1">{teamTwo}</label>
          </label>
          <hr />
        </div>
      ) : null}
    </div>
  );
};
