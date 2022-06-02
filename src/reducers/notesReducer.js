const defaultState = {
  notes: [],
  loading: true,
  error: null,
  totalCount: 0,
};
const GET_NOTES = "GET_NOTES";
const DEL_NOTE = "DEL_NOTE";
const ADD_NOTE = "ADD_NOTE";
const EDIT_NOTE = "EDIT_NOTE";

export const notesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        loading: false,
        error: null,
        notes: [...action.payload.data],
        totalCount: action.payload.headers["x-total-count"],
      };
    case DEL_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };
    case ADD_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        notes: [action.payload, ...state.notes],
      };
    case EDIT_NOTE:
      return {
        ...state,
        loading: false,
        error: null,
        notes: [
          ...state.notes.map((note) =>
            note.id === action.payload.id ? action.payload : note
          ),
        ],
      };
    default:
      return state;
  }
};

export const getNotes = (payload) => ({ type: GET_NOTES, payload });
export const delNote = (payload) => ({ type: DEL_NOTE, payload });
export const addNote = (payload) => ({ type: ADD_NOTE, payload });
export const editNote = (payload) => ({ type: EDIT_NOTE, payload });
