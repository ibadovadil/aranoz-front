import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
   <Container>
     <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <>
      <Link to={"/"} className="col-md-4 col-sm-12 d-flex align-items-center justify-content-center  me-auto link-dark text-decoration-none">
        <img src="https://themewagon.github.io/aranoz/img/logo.png" alt="" className="img-fluid" />
      </Link></>
      <ul className="nav col-md-4 col-sm-12 ms-auto justify-content-center list-unstyled d-flex">
      <li className="nav-item">
          <NavLink to="/" className="nav-link px-2 text-muted">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/shop" className="nav-link px-2 text-muted">Shop</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link px-2 text-muted">About</NavLink>
        </li>
      </ul>
    </footer>
   </Container>
  )
}

export default Footer
