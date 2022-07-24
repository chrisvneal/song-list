const addSongAction = (title, artist, genre) => {
  if (genre === "hiphop") {
    genre = "Hip Hop";
  }
  return {
    type: "ADD_SONG",
    payload: {
      title,
      artist,
      genre
    }
  };
};

export default addSongAction;
