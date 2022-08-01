import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {},
      particlesConfig: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  loadParticleConfig() {
    $.ajax({
      url: "./particlesjs-config.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ particlesConfig: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
    this.loadParticleConfig();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header data={this.state.resumeData.main} config={this.state.particlesConfig} />
        <About data={this.state.resumeData.main} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Experience data={this.state.resumeData.resume} />
        <Education data={this.state.resumeData.resume} />
        <Skills data={this.state.resumeData.resume} />
        {/* <Portfolio data={this.state.resumeData.portfolio} /> */}
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
