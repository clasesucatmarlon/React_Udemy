import React from 'react';

export default function Practica (props) {
  // Destructuring
  const {data} = props
  return (
    <div>
      <h1> Hola {data.nombre} {data.apellido}... Bienvenido</h1>
    </div>
  )
}

/* export default Saludar; */

