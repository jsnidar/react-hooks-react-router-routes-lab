import React from "react";
import { directors } from "../data";
import Actor from "./Actor";


function Directors() {
  const renderDirectors = directors.map(director => <Actor key={director.name} actor={director} />)
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  )
}

export default Directors;
