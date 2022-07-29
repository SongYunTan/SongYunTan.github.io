import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-wrap">
        <ul>
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#experience">
              Experience
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#education">
              Education
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#skills">
              Skills
            </a>
          </li>

          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;
