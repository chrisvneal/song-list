import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <section className="song-input--section">
        <h2>Song Input</h2>
        Song Title: <input />
        Song Genre: <input />
      </section>

      <section className="songs">
        <h2>Song Lists</h2>
        <div className="song-lists">
          {/* song genre */}
          <div className="song-list">
            <h3 className="song-genre">Hip Hop</h3>
            <ul>
              <li className="song-item">
                <span className="song-title">The Time Has Come</span>
                <span className="song-author">Chris Rockman</span>
                <span className="song-genre">Hip-Hop</span>
              </li>
              <li className="song-item">
                <span className="song-title">Who Ever Thought</span>
                <span className="song-author">DJ Tumor</span>
                <span className="song-genre">Hip-Hop</span>
              </li>
              <li className="song-item">
                <span className="song-title">Old School Fashion</span>
                <span className="song-author">Mr. Murderous</span>
                <span className="song-genre">Hip-Hop</span>
              </li>
            </ul>
          </div>

          {/* song genre */}
          <div className="song-list">
            <h3 className="song-genre">R&B</h3>
            <ul>
              <li className="song-item">
                <span className="song-title">Please Come Back</span>
                <span className="song-author">City Girls</span>
                <span className="song-genre">R &amp; B</span>
              </li>
              <li className="song-item">
                <span className="song-title">My Bitch Be Trippin</span>
                <span className="song-author">Tony Saliva</span>
                <span className="song-genre">R &amp; B</span>
              </li>
              <li className="song-item">
                <span className="song-title">Pu**y like Peanut Butter</span>
                <span className="song-author">Land of Ken</span>
                <span className="song-genre">R &amp; B</span>
              </li>
              <li className="song-item">
                <span className="song-title">Smoove City</span>
                <span className="song-author">Pretty Tyson</span>
                <span className="song-genre">R &amp; B</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
