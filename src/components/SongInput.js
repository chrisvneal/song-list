import React from "react";
import { useRef } from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions/index";

const SongInput = ({ dispatch }) => {
  const inputElement = useRef();
  const songInput = inputElement.current;

  const artistInputElement = useRef();
  const artistInput = artistInputElement.current;

  const dropdownInputElement = useRef();
  const dropdownInput = dropdownInputElement.current;

  const addSong = (e) => {
    e.preventDefault();
    const title = songInput.value;
    const artist = artistInput.value;
    const genre = dropdownInput.value;

    dispatch(addSongAction(title, artist, genre));
    // console.log(title, artist, genre);
  };
  return (
    <section className="song-input--section">
      <form>
        <h2>Song Input</h2>
        Song Title: <input ref={inputElement} type="text" />
        Song Artist: <input ref={artistInputElement} type="text" />
        Song Genre:{" "}
        <select ref={dropdownInputElement}>
          <option value="hiphop">Hip-Hop</option>
          <option value="rnb">R &amp; B</option>
        </select>
        <button onClick={addSong}>Submit Song</button>
      </form>
    </section>
  );
};

export default connect(null, { addSongAction })(SongInput);
