import React from "react";
import RingLoader from "react-spinners/RingLoader";

class spinners extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div className="spinner">
        <RingLoader color="#f4f400" size="800" />
        <h3>Cargando</h3>
      </div>
    );
  }
}

export default spinners;
