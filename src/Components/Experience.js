import React, { Component } from "react";
import Slide from "react-reveal";

class Experience extends Component {

  render() {
    if (!this.props.data) return null;

    const work = this.props.data.work.map(function (work) {
      const imageSrc = "/images/" + work.image
      return (
        <div className="company" key={work.company}>
          <div className="image">
            <a href={work.link} target="_blank" rel="noreferrer">
              <img src={imageSrc} alt={work.company}/>
            </a>
          </div>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          
          <ul>{work.description.map(point => <li>{point}</li>)}</ul>
        </div>
      );
    });

    return (
      <section id="experience">
        <Slide left duration={1300}>
          <h1>
            <span>Experience</span>
          </h1>
          <br/>
          <div className="row work">
            <div className="three columns header-col">
              
            </div>
            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Experience;
