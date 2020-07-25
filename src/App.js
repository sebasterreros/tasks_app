import React from "react";
import "./App.css";
import Spinners from "./Components/Spinner";
import Inicio from "./Components/inicio";
import Inicio2 from "./Components/form2"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      Spinners: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ Spinners: false });
    }, 5000);
  }
  render() {
    if (this.state.Spinners === true) {
      return (
        <div className="App">
          <Spinners />
        </div>
      );
    } else {
      return (
        <div className ="div">
          <h1>Bienvenidos a la App de Usuarios</h1>
          <div className="principal">
            <div className="App container">
              <div>
                <Inicio />
              </div>
              <div>
                <Inicio2 />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Spinners />
//     </div>
//   );
// }

export default App;
