import React, { Row, Component } from "react";
import Fade from "react-reveal";
import Testimonials from "./Testimonials";

class About extends Component {
  render() {
    if (!this.props.data) return null;
    if (!this.props.testimonials) return null;

    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const testimonials = this.props.testimonials;

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
              <div className="row buttons-container">
                <div className="columns buttons">
                  <a href="/Tan Song Yun.pdf" className="button" target="_blank" rel="noreferrer">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                  <a href="https://github.com/SongYunTan" className="button" target="_blank" rel="noreferrer">
                    <i className="fa fa-github"></i>View Github Profile
                  </a>
                  <a href="/Testimonials.pdf" className="button" target="_blank" rel="noreferrer">
                    <i className="fa fa-pencil"></i>View Full Testimonials
                  </a>
                </div>
              </div>
              <div className="row">
                <Testimonials data={testimonials} />
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
