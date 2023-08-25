import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

const Personajes = () => {

    // let location = useLocation();
    //     console.log(location);

  let {search} = useLocation();
  let query = new URLSearchParams(search);
  //console.log(query);

  const LIMIT = 20;
  let start = parseInt(query.get("inicio")) || 1;
  let end = parseInt(query.get("fin")) || LIMIT;

  let history = useNavigate();
  //console.log(history);

  const handlePrev = (e) => {
    history({search: `?inicio=${start - LIMIT}&fin=${end - LIMIT}`});
  }

  const handleNext = (e) => {
    history({search: `?inicio=${start + LIMIT}&fin=${end + LIMIT}`});
  };

  return (
    <div>
        <h3>Personajes</h3>
      <p>
        Mostrando los personajes del <b>{start}</b> al <b>{end}</b>
      </p>
      {start > LIMIT && <a onClick={handlePrev} name="" id="" class="btn btn-primary" href="#" role="button">Atrás</a>}
      <a onClick={handleNext} name="" id="" class="btn btn-secondary" href="#" role="button">Adelante</a>
    </div>
  )
}

export default Personajes
