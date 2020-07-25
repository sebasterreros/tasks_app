import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Inicio extends React.Component {

  render() {
    
      return(
        <form className="form">
            <h2>Sigin</h2>
          <div className="campos">
           <div>
             <label>Ingrese un Email: </label>
             <input type="email" name="email" placeholder="email" required/>
           </div>
           <div>
             <label>Ingrese una Contraseña: </label>
             <input type="password" name="password" placeholder="password" required/>
           </div>
           <button className="btn" type="submit">Ingresar</button>
          </div>
        </form>
    
    )
}
}
export default Inicio;

/* function Inicio() {
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
 */