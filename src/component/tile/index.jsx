import React from "react";
import "./style.css";

export default function WordTile({ data }) {
  return (
      <div className="wordTile"> //data to display in this component
          <p className="wordTile__name">Word: {data.word}</p> 
          <p className="wordTile__name">Definition: {data.definition}</p>
          <p className="wordTile__name">Pronunciation: {data.pronunciation}</p>
      </div>
    )
  ;
}
