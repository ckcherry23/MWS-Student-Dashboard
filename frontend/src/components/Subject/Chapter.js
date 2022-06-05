import React from "react";
import './Chapter.css';

export default function Chapter(props) {
  return (
    <div className="chapter-wrapper">
      <div className="chapter">
        <div className="section">{props.chapter.section.toUpperCase()}</div>
        <div className="chapter-name">{props.chapter.chapterName}</div>
      </div>
      <img className="chapter-image" src={props.chapter.image} alt="Chapter image" />
    </div>
  );
}
