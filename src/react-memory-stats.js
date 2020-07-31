import React, { Component } from 'react';
import MemoryStats from './memory-stats';

const statsStyle = {
    position: 'fixed',
};

export default class MemoryStatsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stats: new MemoryStats(),
            corner: props.corner || 'topRight',
        };
        this.getCorner = this.getCorner.bind(this);
    }

    componentDidMount() {
        const rAFloop = () => {
            this.ref.appendChild(this.state.stats.domElement);
            this.state.stats.update();
            this.af = requestAnimationFrame(rAFloop);
        };
        this.af = requestAnimationFrame(rAFloop);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.af);
    }

    getCorner(styles) {
        switch (this.state.corner) {
            case 'topLeft':
                return Object.assign({}, styles, { top: '0px', left: '0px' });
            case 'topRight':
                return Object.assign({}, styles, { top: '0px', right: '0px' });
            case 'bottomLeft':
                return Object.assign({}, styles, { bottom: '0px', left: '0px' });
            case 'bottomRight':
                return Object.assign({}, styles, { bottom: '0px', right: '0px' });
            default:
                return styles;
        }
    }

    render() {
        return (
            <div
                style={this.getCorner(statsStyle)}
                ref={e => {
                    this.ref = e;
                }}
            />
        );
    }
}
