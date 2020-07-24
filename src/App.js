import React from "react";
import "./App.css";
import Spinners from "./Components/Spinner";

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
        <div className="App">
          <h1>Bienvenido a la aplicacion</h1>
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
