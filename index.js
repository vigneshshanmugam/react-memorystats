import React from 'react';
import MemoryStats from './src/memory-stats.js';

let statsStyle = {
  position: 'fixed',
  right: '0px',
  bottom: '0px'
}

let ReactMemoryStatsComponent = React.createClass({

  getInitialState() {
    let Stats = new MemoryStats();
    return {
      stats : Stats
    }
  },

  componentDidMount() {
    let rAFloop = () => {
        this.state.stats.update();
        requestAnimationFrame(rAFloop);
    }
    requestAnimationFrame(rAFloop);
  },

  getMarkup() {
    return {
      __html : this.state.stats.domElement.innerHTML
    }
  },

  render() {
    return <div style={statsStyle} dangerouslySetInnerHTML={this.getMarkup()}>
    </div>
  }

});

export default ReactMemoryStatsComponent;
