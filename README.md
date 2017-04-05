# react-memory-stats

This Component is based on Paul Irish's [memory-stats](https://github.com/paulirish/memory-stats.js).

![image](http://i.imgur.com/eUCFcAH.gif)

### Installation

```javascript
npm install react-memorystats --save
```

### Usage

```
import { render } from 'react-dom';
import MemoryStatsComponent from 'react-memorystats';

render(
  <MemoryStatsComponent corner="topLeft" />,
  document.getElementById("container")
);
```

#### Config

   + corner - topLeft, topRight (default), bottomLeft, bottomRight

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
