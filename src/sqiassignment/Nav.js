import React from 'react'
import '../App.css'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
  <div className="container d-flex justify-content-between">
    <a className="navbar-brand" href="#">
      <img src="https://edu.sqi.ng/wp-content/uploads/2019/01/co.jpg" height="50" alt="sqi-logo" />
    </a>

    <button className="navbar-toggler border-0 shadow-none " type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse nav-aside" id="navContent">
          <div className="navbar-nav ms-auto gap-4">
            <a className="nav-link fw-bold" href="#">About</a>
            <a className="nav-link fw-bold" href="#">Programmes</a>
            <a className="nav-link fw-bold" href="#">Admissions</a>
            <a className="nav-link fw-bold" href="#">E-Portal</a>
            <a className="nav-link fw-bold" href="#">SQI Scholarship</a>
            <a className="nav-link fw-bold" href="#">News</a>
            <a className="nav-link fw-bold" href="#">Contact</a>
          </div>
        </div>
  </div>
    </nav>
  )
}

export default Nav