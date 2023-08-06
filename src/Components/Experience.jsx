import React, { Component } from "react";
import Slide from "react-reveal";
import { Tabs } from 'antd';

class Experience extends Component {

  render() {
    if (!this.props.data) return null;

    const work = this.props.data.work.map(function (work) {
      const imageSrc = "/images/" + work.image
      return {
        label: work.company,
        key: work.company,
        children:
        <div className="company" key={work.company}>
          <img className="image" src={imageSrc}/>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          
          <ul>{work.description.map(point => <li>{point}</li>)}</ul>
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
          <div className="row work">
            <div className="twelve columns main-col">
              <Tabs 
                defaultActiveKey="1"
                tabPosition="left"
                items={work}
              />
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Experience;
