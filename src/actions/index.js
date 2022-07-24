const addSongAction = (title, artist, genre) => {
  return {
    type: "ADD_SONG",
    payload: { title, artist, genre }
  };
};

export { addSongAction };
