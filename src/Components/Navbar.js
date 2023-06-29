import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom"
import { useEffect } from 'react';


export default function Navbar(props) {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.color} bg-${props.mode}`}>
  <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/"?"active":""}`} to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/about"?"active":""}`} to="/about">About</Link>
      </li>
    </ul>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    <div className={`custom-control mx-2 custom-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input type="checkbox" className="custom-control-input" id="customSwitch1"  onClick={props.toggleMode}/>
  <label className="custom-control-label " htmlFor="customSwitch1">Enable DarkMode</label>
</div>
{/* 
<div className="d-flex">
<div className="bg-primary rounded mx-2" onClick={() =>props.toggleMode('primary')} style={{height:'30px',width:'30px',cursor:'pointer'}}>
</div>
<div className="bg-danger rounded mx-2" onClick={() =>props.toggleMode('danger')} style={{height:'30px',width:'30px',cursor:'pointer'}}>
</div>
<div className="bg-secondary rounded mx-2" onClick={() =>props.toggleMode('secondary')} style={{height:'30px',width:'30px',cursor:'pointer'}}>
</div>
<div className="bg-light rounded mx-2" onClick={() =>props.toggleMode('light')} style={{height:'30px',width:'30px',cursor:'pointer',border:'2px solid white'}}>
</div>
<div className="bg-warning rounded mx-2" onClick={() =>props.toggleMode('warning')} style={{height:'30px',width:'30px',cursor:'pointer'}}>

</div>
</div> */}

  </div>
</nav>
  )
}
Navbar.propTypes ={
    title : PropTypes.string.isRequired,
}

// Navbar.defaultProps = {
//     title : "Set your title here",
// }