import React from "react";
import { connect } from "react-redux";
import { addSongAction } from "../actions";

const deleteFields = () => {
  document.querySelector("#song-input").value = "";
  document.querySelector("#artist-input").value = "";
};

const SongInput = ({ genres, addSongAction }) => {
  const availableGenres = genres.map((genre) => (
    <option value={genre} key={genre}>
      {genre}
    </option>
  ));
  return (
    <section className="song-input--section">
      <form>
        <h2>Song Input</h2>
        <p>
          <span>Song Title:</span> <input id="song-input" type="text" />
        </p>
        <p>
          <span>Song Artist:</span> <input id="artist-input" type="text" />
        </p>
        <p>
          <span>Song Genre:</span>{" "}
          <select id="select-input">{availableGenres}</select>
        </p>
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
