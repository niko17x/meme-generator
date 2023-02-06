import React from "react";

function Header() {
  return (
    <div className="header--container">
      <img
        src="../emoji-excited-icon.svg"
        alt="Header emoji icon"
        style={{ width: "3rem" }}
      />
      <h1>Meme Generator</h1>
      <h3>React Course - Project 3</h3>
    </div>
  );
}

export default Header;
