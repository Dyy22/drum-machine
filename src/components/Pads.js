import React, { Component } from "react";

export default class Pads extends Component {
  constructor(props) {
    super(props);

    this.playsound = this.playsound.bind(this);
    this.activeStyle = this.activeStyle.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleKeyPress);
  }

  handleKeyPress(e) {
    const key = e.key.toUpperCase().charCodeAt();
    if (key === this.props.keyCode) {
      this.playsound();
    }
  }

  playsound() {
    this.activeStyle();
    if (!this.props.power) return;
    const audio = document.getElementById(this.props.trigger);
    audio.currentTime = 0;
    audio.play();
    this.props.display(this.props.id);
  }

  activeStyle() {
    const pad = document.getElementById(this.props.trigger).parentElement;
    pad.classList.toggle("drum-pad-active");

    setTimeout(() => pad.classList.toggle("drum-pad-active"), 100);
  }

  componentDidUpdate() {
    const audio = document.getElementById(this.props.trigger);
    audio.volume = this.props.volume;
  }

  render() {
    return (
      <div
        id={this.props.id}
        className="drum-pad col-3 m-2 d-flex justify-content-center shadow"
        onClick={this.playsound}
      >
        <h3 className="align-self-center m-0">{this.props.trigger}</h3>
        <audio
          id={this.props.trigger}
          className="clip"
          src={this.props.url}
        ></audio>
      </div>
    );
  }
}
