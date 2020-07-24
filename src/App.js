import React from "react";
import "./App.css";
import Spinners from "./Components/Spinner";
import Inicio from "./Components/inicio";

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
          <Inicio />
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
