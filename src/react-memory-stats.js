import React, { Component } from "react";
import MemoryStats from "./memory-stats.js";

let statsStyle = {
  position: "fixed"
};

export default class MemoryStatsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stats: new MemoryStats(),
      corner: props.corner || "topRight"
    };
    this.getCorner = this.getCorner.bind(this);
  }

  componentDidMount() {
    let rAFloop = () => {
      this.refs.statsEle.appendChild(this.state.stats.domElement);
      this.state.stats.update();
      requestAnimationFrame(rAFloop);
    };
    requestAnimationFrame(rAFloop);
  }

  getCorner(styles) {
    switch (this.state.corner) {
      case "topLeft":
        Object.assign(styles, { top: "0px", left: "0px" });
        break;
      case "topRight":
        Object.assign(styles, { top: "0px", right: "0px" });
        break;
      case "bottomLeft":
        Object.assign(styles, { bottom: "0px", left: "0px" });
        break;
      case "bottomRight":
        Object.assign(styles, { bottom: "0px", right: "0px" });
        break;
    }
    return styles;
  }

  render() {
    statsStyle = this.getCorner(statsStyle);

    return <div style={statsStyle} ref="statsEle" />;
  }
}
