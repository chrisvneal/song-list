import React from "react";

const songs = [
  {
    title: "The Time Has Come",
    author: "Chris Rockman",
    genre: "Hip-Hop"
  },
  {
    title: "Who Ever Thought",
    author: "DJ Tumor",
    genre: "Hip-Hop"
  },
  {
    title: "Old School Fashion",
    author: "Mr. Murderous",
    genre: "Hip-Hop"
  },
  {
    title: "Please Come Back",
    author: "City Girls",
    genre: "R & B"
  },
  {
    title: "My Bitch Be Trippin",
    author: "Tony Saliva",
    genre: "R & B"
  },
  {
    title: "Pu**y like Peanut Butter",
    author: "Land of Ken",
    genre: "R & B"
  },
  {
    title: "Big Titties",
    author: "Pretty TyReeq",
    genre: "R & B"
  }
];

console.log(songs);

const SongLists = () => {
  return (
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
  );
};

export default SongLists;
