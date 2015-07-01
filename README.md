# react-memory-stats

This Component is based on Paul Irish's [memory-stats](https://github.com/paulirish/memory-stats.js).

### Installation

```javascript
npm install react-memorystats --save
```

### Usage

```
import MemoryStatsComponent form 'react-memorystats';
import React from 'react';

React.render(
  <MemoryStatsComponent corner="topLeft" />,
  document.getElementById("container")
);
```

check the example code [here](https://github.com/vigneshshanmugam/react-memory-stats/blob/master/example).

### Start Chrome with `--enable-precise-memory-info`

```
# Linux
google-chrome --enable-precise-memory-info --enable-memory-info

#MacOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-precise-memory-info --enable-memory-info
```

Otherwise the results from performance.memory are bucketed and less useful.


### Development

```javascript
npm install
npm start

```
