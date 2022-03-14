import React, { Component } from "react";

export default class Controllers extends Component {
  render() {
    return (
      <div className="row p-5 text-center text-white">
        <div id="powerControl" className="col-12 p-3 ">
          <h5>Power</h5>
          <div className="d-flex flex-column align-items-center w-100 ">
            <input
              type="checkbox"
              id="power"
              name="power"
              onChange={this.props.setPower}
              checked={this.props.power}
            />
            <label htmlFor="power"></label>
          </div>
        </div>
        <div
          id="display"
          className="col-10 p-3 mx-auto d-flex justify-content-center align-items-center my-2"
        >
          <h5 className="m-0 ">{this.props.display}</h5>
        </div>
        <div id="volume" className="col-12 w-75 mx-auto p-3">
          <input
            type="range"
            className="form-range"
            id="volume"
            min="0"
            max="1"
            step="0.01"
            value={this.props.volume}
            onChange={this.props.setVolume}
            disabled={!this.props.power}
          />
        </div>
        <div id="bankControl" className="col-12 p-3 ">
          <h5>Bank</h5>
          <div className="d-flex flex-column align-items-center w-100 ">
            <input
              type="checkbox"
              id="bank"
              name="bank"
              onChange={this.props.setBank}
            />
            <label htmlFor="bank"></label>
          </div>
        </div>
      </div>
    );
  }
}
