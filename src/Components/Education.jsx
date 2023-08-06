import React, { Component } from "react";
import Slide from "react-reveal";
import { Tabs } from 'antd';

class Education extends Component {

  render() {
    if (!this.props.data) return null;

    const education = this.props.data.education.map(function (education) {
      const imageSrc = "/images/" + education.image
      return {
        label: education.school,
        key: education.school,
        children:
        <div className="school" key={education.school}>
          <img className="image" src={imageSrc}/>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <ul>{education.description.map(point => <li>{point}</li>)}</ul>
        </div>
      };
    });

    return (
      <section id="education">
        <Slide left duration={1300}>
          <h1>
            <span>Education</span>
          </h1>
          <br/>
          <div className="row education">
            <div className="twelve columns main-col">
              <Tabs 
                defaultActiveKey="1"
                tabPosition="left"
                items={education}
              />
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Education;
