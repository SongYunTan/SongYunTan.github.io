import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

let id = 0;
class Interests extends Component {
  render() {
    if (!this.props.data) return null;

    const interest = this.props.data.interest.map(function (interest) {
      let projectImage = "images/portfolio/" + interest.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={interest.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{interest.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="interests">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Interests.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {interest}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Interests;
