import React from 'react';
import MemoryStats from './memory-stats.js';

let statsStyle = {
  position: 'fixed'
}

let MemoryStatsComponent = React.createClass({

  getInitialState() {
    let Stats = new MemoryStats();
    return {
      stats : Stats,
      corner: this.props.corner || 'topRight'
    }
  },

  componentDidMount() {
    let rAFloop = () => {
      this.refs.statsEle.getDOMNode().appendChild(this.state.stats.domElement);
      this.state.stats.update();
      requestAnimationFrame(rAFloop);
    }
    requestAnimationFrame(rAFloop);
  },

  getCorner() {
    switch(this.state.corner) {
      case 'topLeft':
        statsStyle.top = '0px';
        statsStyle.left = '0px';
        break;
      case 'topRight':
        statsStyle.top = '0px';
        statsStyle.right = '0px';
        break;
      case 'bottomLeft':
        statsStyle.bottom = '0px';
        statsStyle.left = '0px';
        break;
      case 'bottomRight':
        statsStyle.bottom = '0px';
        statsStyle.right = '0px';
        break;
    }
    return statsStyle;
  },

  render() {
    statsStyle = this.getCorner();

    return <div style={statsStyle} ref='statsEle'>
    </div>
  }

});

export default MemoryStatsComponent;
