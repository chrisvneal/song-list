import { combineReducers } from "redux";
import { songs } from "../data/songs";

const songsReducer = () => {
  return songs;
};

export default combineReducers({ songs: songsReducer });
