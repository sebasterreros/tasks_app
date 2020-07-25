import React from "react";

class Form1 extends React.Component {
  render() {
    return (
      <form className="form">
        <h2>Sigin</h2>
        <div className="campos">
          <div>
            <label>Ingrese un Email: </label>
            <input type="email" name="email" placeholder="email" required />
          </div>
          <div>
            <label>Ingrese una Contraseña: </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
          </div>
          <button className="btn" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    );
  }
}
export default Form1;
