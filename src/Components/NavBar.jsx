import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-wrap">
        <ul>
          <li className="current">
            <a className="smoothscroll" href="#home">
              <i className="fa fa-home"></i>Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              <i className="fa fa-user"></i>About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#experience">
              <i className="fa fa-briefcase"></i>Experience
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#education">
              <i className="fa fa-graduation-cap"></i>Education
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#skills">
              <i className="fa fa-code"></i>Skills
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              <i className="fa fa-phone"></i>Contact
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
