import "./App.scss";
import "bootstrap/scss/bootstrap.scss";

import { fetchNotes } from "./data/notes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NotesList from "./components/NotesList";
import InputForm from "./components/InputForm";
import React from "react";
import { Pagination, Spinner } from "react-bootstrap";
import { getPageCount, getPagesArray } from "./utils/pages";

function App() {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const limit = 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNotes(limit, page));
  }, [dispatch, page]);

  let pagesArray = getPagesArray(getPageCount(notes.totalCount, limit));

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <InputForm />
      {notes.loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          {notes.notes.map((note) => (
            <NotesList note={note} key={note.id} />
          ))}
        </>
      )}

      <Pagination>
        {pagesArray.map((p) => (
          <Pagination.Item
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? "active" : ""}
          >
            {p}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default App;
