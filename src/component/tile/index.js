import React from "react";
import "./style.css";

export default function WordTile({ data }) {
  return (
      <div className="wordTile">
        <p className="wordTile__name">
          Word: {data.word}
          Definition: {data.definition}
          Pronunciation: {data.pronunciation}
        </p>
      </div>
    )
  ;
}