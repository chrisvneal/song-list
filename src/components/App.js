import "../styles.scss";

import SongLists from "./SongLists";

export default function App() {
  return (
    <div className="App">
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

      <section className="songs">
        <h2>Song Lists</h2>
        <SongLists />
      </section>
    </div>
  );
}
