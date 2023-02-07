import React from "react";

function Meme() {
  return (
    <div className="meme--container">
      <div className="meme--input">
        <input
          className="meme--first_input"
          type="input"
          placeholder="Shut up"
        ></input>
        <input
          className="meme--second_input"
          type="input"
          placeholder="and take my money!"
        ></input>
      </div>
      <button className="meme--submit_button" type="submit">
        Get a new meme image
        <img src="../image-icon.svg" alt="Icon for submit button" />
      </button>
    </div>
  );
}

export default Meme;
