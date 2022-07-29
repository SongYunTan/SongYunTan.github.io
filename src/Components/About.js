import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;

    return (
      <section id="about">
        <Fade duration={1000}>
          <h1>
            <span>About</span>
          </h1>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Song Yun profile pic"
              />
            </div>
            <div className="nine columns main-col">
              <br/>
              <p>
                {bio}
                <a className="smoothscroll" href="#contact" style={{color: "#6495ED"}}>
                  Let's connect!
                </a>
              </p>
              <div className="row">
                <div className="columns download">
                  <p>
                    <a href="/Tan Song Yun.pdf" className="button" download>
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
