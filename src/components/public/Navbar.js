import React from 'react'
import { Link } from 'react-router-dom'

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
          <Link to="/" className="nav-link px-2 text-secondary">Home </Link>
          <Link to="/" className="nav-link px-2 text-secondary">Features </Link>
          <Link to="/" className="nav-link px-2 text-secondary">Pricing </Link>
          <Link to="/" className="nav-link px-2 text-secondary">FAQs </Link>
          <Link to="/UserForm" className="nav-link px-2 text-secondary">Contacto </Link>

        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Navbar
