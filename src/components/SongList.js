import React from "react";

const SongList = ({ genre, songs }) => {
  return (
    <div className="song-list">
      <h3 className="song-genre">{genre}</h3>
      <ul>
        <li className="song-item">
          <span className="song-title">The Time Has Come</span>
          <span className="song-artist">Chris Rockman</span>
          <span className="song-genre">Hip-Hop</span>
        </li>
      </ul>
    </div>
  );
};

export default SongList;
