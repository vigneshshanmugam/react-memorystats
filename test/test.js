import ReactMemoryStatsComponent from '../';
import React from 'react';

const TestComponent = React.createClass({

  render() {
    return <div className="test">
      <ReactMemoryStatsComponent/>
    </div>
  }

});

window.addEventListener('load', function(){
  let container = document.createElement('div');
  document.body.appendChild(container);
  React.render(<TestComponent/>, container);
});

