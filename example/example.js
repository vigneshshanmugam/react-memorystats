import React from 'react'
import { render } from 'react-dom'
import MemoryStatsComponent from '../src/react-memory-stats';

render(<MemoryStatsComponent corner='bottomLeft'/>, document.getElementById('container'));
