import React, { Component } from "react";
import Slide from "react-reveal";

class Education extends Component {

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      return (
        <div className="school" key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <ul>{education.description.map(point => <li>{point}</li>)}</ul>
        </div>
      );
    });

    return (
      <section id="education">
        <Slide left duration={1300}>
          <h1>
            <span>Education</span>
          </h1>
          <br/>
          <div className="row education">
            <div className="three columns header-col">
            </div>
            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Education;
