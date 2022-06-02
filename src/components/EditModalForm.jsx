import React from "react";
import "./components.scss";
import { Button, Form, Modal } from "react-bootstrap";

const EditModalForm = (props) => {
  // console.log(props);
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Заголовок: </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Описание: </Form.Label>
          <Form.Control as="textarea" type="text" className="description" />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" type="submit">
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModalForm;
