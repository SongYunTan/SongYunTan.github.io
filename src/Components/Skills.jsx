import React, { Component } from "react";
import Slide from "react-reveal";

class Skills extends Component {

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;

    const languages = this.props.data.skills.languages.map((skills) => {
      const backgroundColor ='#6495ED';
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span className="skillname">{skills.name}</span>
          <div className="bars-container">
            <span style={{ width, backgroundColor}} className={className}></span>
            <span className="skillpercentage">{skills.level}</span>
          </div>
        </li>
      );
    });

    const libraries = this.props.data.skills.libraries.map((skills) => {
      const backgroundColor ='#6495ED';
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span className="skillname">{skills.name}</span>
          <div className="bars-container">
            <span style={{ width, backgroundColor}} className={className}></span>
            <span className="skillpercentage">{skills.level}</span>
          </div>
        </li>
      );
    });

    return (
      <section id="skills">
        <Slide left duration={1300}>
          <h1>
            <span>Skills</span>
          </h1>
          <div className="row skill">
            <div className="six columns">
              <div className="bars">
                <ul className="skills">{languages}</ul>
              </div>
            </div>

            <div className="six columns">
              <div className="bars">
                <ul className="skills">{libraries}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Skills;
