import React from "react";
import './Chapter.css';

export default function Chapter(props) {
  return (
    <div className="outer">
    <div className="chapter-wrapper">
      <div className="chapter">
        <div className="section">{props.section.toUpperCase()}</div>
        <div className="title">{props.title}</div>
      </div>
      <img className="chapter-image" src={props.image} alt="Chapter image" />
    </div>
    </div>
  );
}
