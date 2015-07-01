'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _memoryStatsJs = require('./memory-stats.js');

var _memoryStatsJs2 = _interopRequireDefault(_memoryStatsJs);

var statsStyle = {
  position: 'fixed'
};

var MemoryStatsComponent = _react2['default'].createClass({
  displayName: 'MemoryStatsComponent',

  getInitialState: function getInitialState() {
    var Stats = new _memoryStatsJs2['default']();
    return {
      stats: Stats,
      corner: this.props.corner || 'topRight'
    };
  },

  componentDidMount: function componentDidMount() {
    var _this = this;

    var rAFloop = function rAFloop() {
      _this.refs.statsEle.getDOMNode().appendChild(_this.state.stats.domElement);
      _this.state.stats.update();
      requestAnimationFrame(rAFloop);
    };
    requestAnimationFrame(rAFloop);
  },

  getCorner: function getCorner() {
    switch (this.state.corner) {
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

  render: function render() {
    statsStyle = this.getCorner();

    return _react2['default'].createElement('div', { style: statsStyle, ref: 'statsEle' });
  }

});

exports['default'] = MemoryStatsComponent;
module.exports = exports['default'];