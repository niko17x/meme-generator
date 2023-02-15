import React from "react";
// import memeData from "./memeData";

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      // Go all the way into 'memes' array in API and fetch it :
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage(event) {
    // const memesArray = allMemes.data.memes.url;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
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
