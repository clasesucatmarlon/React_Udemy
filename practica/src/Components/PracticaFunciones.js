import React from 'react';

export default function PracticaFunciones (props) {

/*   const saludar = () => {
    alert("Hola my friend");
  } */

  const { data, saludar } = props;
  const { nombre = 'Anonimo', apellido = 'Anonimo' } = data

  return (
    <button onClick={() => saludar(nombre, apellido)}>Enviar saludo</button>
  );
}
