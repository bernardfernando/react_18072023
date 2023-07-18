import React from "react";

import "../Child/Child";

// need to import this on the final way of rendering the imagae onto the page

import Boy from "../494.jpg";

export default function Child({ name, pats, handleBobsPats }) {
  return (
    <div>
      <h2>{name}</h2>
      <img onClick={() => handlBobsPats()} src={Boy} alt="boy" />
      <span> number of pats on Bons head: {pats}</span>
    </div>
  );
}
