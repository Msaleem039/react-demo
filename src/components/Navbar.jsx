import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
<div>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" href="#">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
          </li>
          <li className="nav-item">
           <Link to="/product" className="nav-link" >Product</Link>
          </li>
          <li className="nav-item">
           <Link to="/contact" className="nav-link" >Contact</Link>
          </li>
          <li className="nav-item">
           <Link to="/saree" className="nav-link" >Saree</Link>
          </li>
          <li className="nav-item">
           <Link to="/gallery" className="nav-link" >Gallery</Link>
          </li>
          <li className="nav-item">
           <Link to="/fakedata" className="nav-link" >NewProduct</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</div>

  )
}

export default Navbar
