import { combineReducers } from "redux";
import { songs } from "../data/songs";

const songsReducer = (state = songs, action) => {
  if (action.type === "ADD_SONG") {
    console.log([...state, action.payload]);
    return [...state, action.payload];
  }
  return state;
};

export default combineReducers({ songs: songsReducer });
