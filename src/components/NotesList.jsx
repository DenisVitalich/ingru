import React, { useEffect } from "react";
import { Trash, PencilFill } from "react-bootstrap-icons";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { delNote, editNote } from "../reducers/notesReducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import "./components.scss";

const NotesList = ({ note }) => {
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const dispatch = useDispatch();

  const removePost = (id) => {
    dispatch(delNote(id));
  };

  const saveChange = () => {
    setEdit(false);
    dispatch(editNote({ id: note.id, title: title, body: body }));
  };

  useEffect(() => {
    if (!note) return;
    setTitle(note.title);
    setBody(note.body);
  }, [note]);
  return (
    <Card className="card">
      <Card.Header className="header">
        {edit ? (
          <Form.Control
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            required
            placeholder="Укажите описание"
          />
        ) : (
          <>{title}</>
        )}
      </Card.Header>
      <Card.Body>
        {edit ? (
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              onChange={(e) => setBody(e.target.value)}
              value={body}
              as="textarea"
              type="text"
              required
              placeholder="Укажите описание"
              className="description"
            />
          </Form.Group>
        ) : (
          <Card.Text className="text">{body}</Card.Text>
        )}

        <Row className="mx-0 justify-content-end">
          {edit ? (
            <Button
              as={Col}
              size="sm"
              className="btn btn-primary large-button"
              onClick={() => saveChange()}
            >
              Сохранить
            </Button>
          ) : (
            <Button
              as={Col}
              variant="outline-dark"
              size="sm"
              className="small-button"
              onClick={() => setEdit(true)}
            >
              <PencilFill />
            </Button>
          )}
          <Button
            onClick={() => removePost(note.id)}
            as={Col}
            variant="outline-danger"
            className="mx-2 small-button"
            size="sm"
          >
            {" "}
            <Trash />
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default NotesList;
