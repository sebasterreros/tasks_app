import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Inicio() {
  return (
    <div className="Formulario">
      <Form>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Ingrese su correo</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </div>
  );
}
export default Inicio;
