import React, { Component } from "react";
import Slide from "react-reveal";
import { Tabs } from 'antd';

class Experience extends Component {

  render() {
    if (!this.props.data) return null;

    const exp = this.props.data.experience.map(function (experience) {
      const imageSrc = "/images/" + experience.image
      return {
        label: experience.company,
        key: experience.company,
        children:
        <div className="company" key={experience.company}>
          <img className="image" src={imageSrc}/>
          <p className="info">
            {experience.title}
            <span>&bull;</span> <em className="date">{experience.years}</em>
          </p>
          
          <ul>{experience.description.map(point => <li>{point}</li>)}</ul>
        </div>
      };
    });

    return (
      <section id="experience">
        <Slide left duration={1300}>
          <h1>
            <span>Experience</span>
          </h1>
          <br/>
          <div className="row experience">
            <div className="twelve columns main-col">
              <Tabs 
                defaultActiveKey="1"
                tabPosition="left"
                items={exp}
              />
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Experience;
