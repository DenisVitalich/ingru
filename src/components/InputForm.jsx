import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addNote } from "../reducers/notesReducer";
import "./components.scss";
import uuid from "react-uuid";

const InputForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addNote({ title: title, body: body, id: uuid() }));
    setBody("");
    setTitle("");
  };

  return (
    <Form onSubmit={onSubmit} className="square border rounded form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
          placeholder="Укажите заголовок для статьи"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          onChange={(e) => setBody(e.target.value)}
          as="textarea"
          value={body}
          type="text"
          required
          placeholder="Укажите описание"
          className="description"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="float-end">
        Добавить
      </Button>
    </Form>
  );
};

export default InputForm;
