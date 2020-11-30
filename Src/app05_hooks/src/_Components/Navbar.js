import React from 'react';
import {Link} from 'react-router-dom';


export const Navbar = () => (
<nav className="navbar navbar-expand-sm navbar-light bg-light">
  <Link className="navbar-brand" to="/">Flash chat</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarText">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link btn btn-primary" style={{color:"white"}} to="/startchat">Start new chat</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
    </ul>
    <span className="navbar-text">
      some other text
    </span>
  </div>
</nav>)


    {/*
    <nav className="navar navbar-dark bg-primary navbar-expand-lg">
        <span className="navbar-brand mb-0 h1">
        Public chat
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
                <a href="/" className="nav-link">Main</a>
            </li>
            <li className="nav-item">
                <a href="/about" className="nav-link">About</a>
            </li>
        </ul>
        </div>
    </nav>*/}

