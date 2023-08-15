import React, { Component } from "react";

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
        <div className="columns flex-container">
            <div className="flexslider">
              <i className="fa fa-quote-left"></i>
              <ul className="slides">{testimonial}</ul>
              <div className="columns quote-right">
                <i className="fa fa-quote-right"></i>
              </div>
            </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
