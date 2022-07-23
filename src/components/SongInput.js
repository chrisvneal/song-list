import React from "react";

const SongInput = () => {
  return (
    <section className="song-input--section">
      <form>
        <h2>Song Input</h2>
        Song Title: <input type="text" />
        Song Genre:{" "}
        <select>
          <option value="hiphop">Hip Hop</option>
          <option value="rnb">R &amp; B</option>
        </select>
        <button>Submit Song</button>
      </form>
    </section>
  );
};

export default SongInput;
