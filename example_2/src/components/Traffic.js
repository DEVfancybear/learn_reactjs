import React, { Component } from "react";
import classnames from "classnames";
import "./Traffic.css";
const RED = 0;
const ORANGE = 1;
const GREEN = 2;
class Traffic extends Component {
  render() {
    const { currentColor } = this.props;
    return (
      <>
        <div className="TrafficLight">
          <div
            className={classnames('bulb', 'red', {
              active: currentColor === RED
            })}
          ></div>
          <div
            className={classnames('bulb', 'orange', {
              active: currentColor === ORANGE
            })}
          ></div>
          <div
            className={classnames('bulb', 'green', {
              active: currentColor === GREEN
            })}
          ></div>
        </div>
      </>
    );
  }
}
export default Traffic;
