import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark">
    <div className="container">
      
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">

      
       
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

          {/* <li><a href="/" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="UserForm" className="nav-link px-2 text-white">Contacto</a></li> */}

          <NavLink exact to="/" className="nav-link px-2 text-secondary" activeClassName="active">Home </NavLink>          
          <NavLink exact to="/Personajes" className="nav-link px-2 text-secondary" activeClassName="active">Personajes </NavLink>
          <NavLink exact to="/Pricing" className="nav-link px-2 text-secondary" activeClassName="active">Pricing </NavLink>
          <NavLink exact to="/FAQs" className="nav-link px-2 text-secondary" activeClassName="active">FAQs </NavLink>
          {/* <NavLink exact to="/UserForm" className="nav-link px-2 text-secondary" activeClassName="active">Contacto </NavLink> */}

        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <Link to="/UserForm">
          <button type="button" className="btn btn-warning">Sign-up</button>
          </Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
