import React from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions/index";

const SongInput = ({ addSongAction }) => {
  const deleteFields = () => {
    document.querySelector("#song-input").value = "";
    document.querySelector("#artist-input").value = "";
  };
  return (
    <section className="song-input--section">
      <form>
        <h2>Song Input</h2>
        Song Title: <input id="song-input" type="text" />
        Song Artist: <input id="artist-input" type="text" />
        Song Genre:{" "}
        <select id="select-input">
          <option value="Hip-Hop">Hip-Hop</option>
          <option value="R & B">R &amp; B</option>
          <option value="Trap">Trap</option>
        </select>
        <button
          onClick={(e) => {
            e.preventDefault();

            const title = document.querySelector("#song-input").value;
            const artist = document.querySelector("#artist-input").value;
            const genre = document.querySelector("#select-input").value;

            addSongAction(title, artist, genre);

            deleteFields();

            document.querySelector("#song-input").focus();
          }}
        >
          Submit Song
        </button>
      </form>
    </section>
  );
};

export default connect(null, { addSongAction })(SongInput);
