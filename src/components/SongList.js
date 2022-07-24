import React from "react";
import { connect } from "react-redux";

import SongItem from "./SongItem";

const SongList = ({ genre, songs }) => {
  return (
    <div className="song-list">
      <h3 className="song-genre">{genre}</h3>
      <ul>
        {songs.map((song) => (
          <SongItem song={song} key={song.title} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  // Filter songs based on their genre, provided by SongList props
  const songs = state.songs.filter((song) => song.genre === ownProps.genre);
  return { songs };
};

export default connect(mapStateToProps)(SongList);
