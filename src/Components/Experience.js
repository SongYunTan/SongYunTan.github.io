import React, { Component } from "react";
import Slide from "react-reveal";

class Experience extends Component {

  render() {
    if (!this.props.data) return null;

    const companyLogos = this.props.data.experience.map(function (experience) {
      const imageSrc = "/images/" + experience.image
      return (
        <div className="logo-box columns" key={experience.company}>
          <img src={imageSrc} alt={experience.company}/>
        </div>
      );
    });

    const expInfo = this.props.data.experience.map(function (experience) {
      const imageSrc = "/images/" + experience.image
      return (
        <div className="exp-info row" key={experience.company}>
          <div className="logo three columns">
            <a href={experience.link} target="_blank" rel="noreferrer">
              <img src={imageSrc} alt={experience.company}/>
            </a>
          </div>
          <div className="info twelve columns">
            <p className="role">
              {experience.title}
              <span>&bull;</span> <em className="date">{experience.years}</em>
            </p>
            <ul>{experience.description.map(point => <li>{point}</li>)}</ul>
          </div>
        </div>
      );
    });


    return (
      <section id="experience">
        <Slide left duration={1300}>
          <h1>
            <span>Experience</span>
          </h1>
          <div className="experience">
            <div className="company-logos row">{companyLogos}</div>
            <div>{expInfo}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Experience;
