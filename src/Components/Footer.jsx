import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <footer id="footer">
        <div className="row">
          <div className="scrolltop">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>

          <Fade bottom>
            <div className="twelve columns">
              <ul className="copyright">
                <li>&copy; Copyright 2021 Song Yun Tan</li>
              </ul>
            </div>
          </Fade>
        </div>
      </footer>
    );
  }
}

export default Footer;
