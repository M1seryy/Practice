import React from "react";
import { Routes, Route } from "react-router-dom";
import { Player } from "./PlayersComponent/Player";
import { Auth } from "./Auth/Auth";
import { Matches } from "./matches/Matches.jsx";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/players" element={<Player />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  );
};
