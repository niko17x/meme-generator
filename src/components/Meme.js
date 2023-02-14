import React from "react";
import memeData from "./memeData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  // console.log(meme);

  // Randomizes image url from 'memeData' and changes 'meme' state to new image URL to display :
  // function getMemeImage(event) {
  //   const memesArray = allMemeImages.data.memes;
  //   const randomNumber = Math.floor(Math.random() * memesArray.length);
  //   const url = memesArray[randomNumber].url;

  //   // Change 'randomImage' property to updated new image using 'url' :
  //   setMeme((prevMeme) => {
  //     const { name, value } = event.target;
  //     return {
  //       ...prevMeme,
  //       [name]: value,
  //     };
  //   });
  // }
  function getMemeImage(event) {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <div className="meme--container">
      <div className="meme--input">
        <input
          className="meme--first_input"
          type="input"
          placeholder="Shut up"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>
        <input
          className="meme--second_input"
          type="input"
          placeholder="and take my money!"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
        <button
          className="meme--submit_button"
          type="submit"
          name="button"
          // Event that randomizes and returns a new image with every click :
          onClick={getMemeImage}
        >
          Get a new meme image
          <img src="../image-icon.svg" alt="Icon for submit button" />
        </button>
      </div>
      <div className="meme">
        {/* Using 'randomImage' property to display new image : */}
        <img
          className="meme--image"
          name="image"
          src={meme.randomImage}
          alt="Main meme"
        />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
