import React from "react";
import { actors } from "../data";
import Actor from "./Actor";

function Actors() {
    const renderActors = actors.map(actor => <Actor key={actor.name} actor={actor} />)
  return (
    <div>
      <h1>Actors Page</h1>
      {renderActors}
    </div>
  )
  
}

export default Actors;
