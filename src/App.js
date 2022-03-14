import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DrumPads from "./components/DrumPads";
import React from "react";
import Controllers from "./components/Controllers";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      power: true,
      bank: false,
      volume: 0.5,
      display: "",
    };

    this.handleDisplay = this.handleDisplay.bind(this);
    this.handlePower = this.handlePower.bind(this);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.handleVolume = this.handleVolume.bind(this);
    this.handleBank = this.handleBank.bind(this);
  }

  handleDisplay(text) {
    this.setState({ display: text });
  }

  clearDisplay() {
    this.setState({ display: "" });
  }

  handlePower() {
    this.setState((state) => ({ power: !state.power }));
    this.clearDisplay();
  }

  handleVolume(event) {
    this.setState({ volume: event.target.value });
    this.setState({ display: Math.round(event.target.value * 100) });

    setTimeout(this.clearDisplay, 1000);
  }

  handleBank() {
    this.setState((state) => ({ bank: !state.bank }));

    if (!this.state.power) return;
    if (this.state.bank) this.handleDisplay("Bank One");
    else this.handleDisplay("Bank Two");

    setTimeout(this.clearDisplay, 1000);
  }

  render() {
    return (
      <div className="container d-flex flex-column justify-content-center">
        <div id="drum-machine" className="row shadow">
          <div className="col-lg-6">
            <DrumPads
              display={this.handleDisplay}
              power={this.state.power}
              volume={this.state.volume}
              bank={this.state.bank}
            />
          </div>
          <div className="col-lg-6">
            <Controllers
              power={this.state.power}
              setPower={this.handlePower}
              display={this.state.display}
              setVolume={this.handleVolume}
              setBank={this.handleBank}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
