import React from "react";

import { songs } from "../data/songs";

const SongLists = () => {
  return (
    <div className="song-lists">
      {/* song genre */}
      <div className="song-list">
        <h3 className="song-genre">Hip Hop</h3>
        <ul>
          <li className="song-item">
            <span className="song-title">The Time Has Come</span>
            <span className="song-artist">Chris Rockman</span>
            <span className="song-genre">Hip-Hop</span>
          </li>
          <li className="song-item">
            <span className="song-title">Who Ever Thought</span>
            <span className="song-artist">DJ Tumor</span>
            <span className="song-genre">Hip-Hop</span>
          </li>
          <li className="song-item">
            <span className="song-title">Old School Fashion</span>
            <span className="song-artist">Mr. Murderous</span>
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
            <span className="song-artist">City Girls</span>
            <span className="song-genre">R &amp; B</span>
          </li>
          <li className="song-item">
            <span className="song-title">My Bitch Be Trippin</span>
            <span className="song-artist">Tony Saliva</span>
            <span className="song-genre">R &amp; B</span>
          </li>
          <li className="song-item">
            <span className="song-title">Pu**y like Peanut Butter</span>
            <span className="song-artist">Land of Ken</span>
            <span className="song-genre">R &amp; B</span>
          </li>
          <li className="song-item">
            <span className="song-title">Smoove City</span>
            <span className="song-artist">Pretty Tyson</span>
            <span className="song-genre">R &amp; B</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SongLists;
