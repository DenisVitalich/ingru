import axios from "axios";
import { getNotes } from "../reducers/notesReducer";

export const fetchNotes = (limit = 10, page = 1) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`, {
        params: {
          _limit: limit,
          _page: page,
        },
      })
      .then((res) => {
        dispatch(getNotes(res));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
