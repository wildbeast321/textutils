import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom"


export default function Navbar(props) {

 let activeClassName="active nav-link"
  
  return (
<nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({ isActive }) =>
              isActive ? activeClassName : "nav-link"} aria-current="page" to="/">{props.home}</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) =>
              isActive ? activeClassName : "nav-link"}  to="/About">{props.about}</NavLink>
        </li>
      </ul>
    <div className="form-check form-switch ">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
      <label className={`form-check-label text-${props.navtext}`}htmlFor="flexSwitchCheckDefault">{props.textnav}</label>
    </div>  
    </div>
  </div>
</nav>
  )
}
Navbar.prototype={
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired
}
Navbar.defaultProps={
    title: "set title here",
    about: "set about us here",
    home : "set home here"
}