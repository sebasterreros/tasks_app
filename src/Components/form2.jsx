import React from "react";

class Inicio2 extends React.Component {

    render() {
      
        return(
          <form className="form">
              <h2>Registrarse</h2>
            <div className="campos">
             <div>
               <label>Ingrese un Nombre: </label>
               <input type="text" name="nombre" placeholder="nombre" required />
             </div>
             <div>
               <label>Ingrese un Apellido: </label>
               <input type="text" name="apellido" placeholder="apellido" required/>
             </div>
             <div>
               <label>Ingrese un Email: </label>
               <input type="email" name="email" placeholder="email" required/>
             </div>
             <div>
               <label>Ingrese una Contraseña: </label>
               <input type="password" name="password" placeholder="password" required/>
             </div>
             <button className="btn" type="submit">Registrar</button>
            </div>
          </form>
      
      )
  }
  }
  export default Inicio2;