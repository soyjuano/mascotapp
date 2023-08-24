import React from 'react'
import { useLocation } from 'react-router-dom'

const Personajes = () => {

    let location = useLocation();
        console.log(location);
// 

  return (
    <div>
        <h3>Personajes</h3>
      <p>
        Mostraremos los personajes del <b>1</b> al <b>20</b>
      </p>
      <a name="" id="" class="btn btn-primary" href="#" role="button">Atrás</a>
      <a name="" id="" class="btn btn-secondary" href="#" role="button">Adelante</a>
    </div>
  )
}

export default Personajes
