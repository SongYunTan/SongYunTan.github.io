import React, { Component } from "react";
import reactReveal from "react-reveal";

class Testimonials extends Component {
  render() {
    if (!this.props.data) return null;

    const testimonial = this.props.data.testimonial.map(function(testimonial) {
      return (
        <li key={testimonial.referee}>
          <blockquote>
            <p>{testimonial.text}</p>
            <cite>{testimonial.referee}</cite>
          </blockquote>
        </li>
      );
    });

    return (
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <div className="ten columns flex-container">
              <div className="flexslider">
                <div className="two columns header-col">
                  <h1>
                    <span></span>
                  </h1>
                </div>
                <ul className="slides">{testimonial}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
