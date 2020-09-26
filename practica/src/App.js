import React, { Component } from 'react';

import Practica from './Components/Practica'
import PracticaFunciones from './Components/PracticaFunciones'

class App extends Component {
  render() {

    const dataUser = {
      nombre: "Marlon",
      apellido: "García",
      telefono: "3123315117"
    }

    const dataUser2 = {
      nombre: "Pepito",
      apellido: "Perol",
      telefono: "3123315117"
    }

    const saludarFn = (nombre, apellido) => {
      /* console.log("Hola my friend " + nombre + ' ' + apellido); */
      // template string
      console.log(`Hola ${nombre} ${apellido} Bienvenido`)
    }

    const enviarSaludo = nombre => {
      console.log('Hola ' + nombre);
    }

    return (
      <div>
        <h1>Trabajando con componentes</h1>
        {/* <Practica name={dataUser} /> */}
        <PracticaFunciones data={dataUser} saludar={enviarSaludo} />
        <PracticaFunciones data={dataUser2} saludar={enviarSaludo} />
      </div>
    );
  }
}

export default App;
