import { combineReducers } from "redux";
import { songs } from "../data/songs";

const songsReducer = (state = songs, action) => {
  if (action.type === "ADD_USER") {
    return [...state, action.payload];
  }
  return songs;
};

export default combineReducers({ songs: songsReducer });
