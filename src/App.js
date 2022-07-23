import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <section className="song-input--section">
        <h2>Song Input</h2>
        Song Title: <input />
        Song Genre: <input />
      </section>
      <section className="song-lists">
        <ul className="song-list">
          <li className="song-item">
            <span className="song-title">The Time Has Come</span>
            <span className="song-author">Chris Rockman</span>

            <span className="song-genre">R &amp; B</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
