import React, { Component } from "react";

class Cloc extends Component {
  constructor(props) {
    super(props);
    // Estado privado del component
    this.state = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: "Martin",
      apellidos: "San Jose",
    };
    console.log(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState((prevState) => {
      let edad = prevState.edad + 1;
      return {
        ...prevState,
        fecha: new Date(),
        edad,
      };
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Clock Con class</h1>
        <h2>
          Hora Actual:
          {this.state.fecha.toLocaleTimeString()}
        </h2>
        <h3>
          {this.state.nombre} {this.state.apellidos}
        </h3>
        <h1>Edad: {this.state.edad}</h1>
      </div>
    );
  }
}
export default Cloc;
