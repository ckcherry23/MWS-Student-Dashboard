import React from "react";

export default function Chapter(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h6>{props.section.toUpperCase()}</h6>
    </div>
  );
}
