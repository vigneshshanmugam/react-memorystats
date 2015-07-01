# react-memory-stats

This Component is based on Paul Irish's [memory-stats](https://github.com/paulirish/memory-stats.js).

### Usage

```
import ReactStatsMemoryComponent form 'react-stats-memory-component';
import React from 'react';

let PageComponent = React.createClass({
  render(){
    return <div>
      <ReactStatsMemoryComponent corner='topLeft'/>
    </div>
  }
});
```

check the usage example [here](https://github.com/vigneshshanmugam/react-memory-stats/blob/master/test/test.js).

### Start Chrome with `--enable-precise-memory-info`

```
# Linux
google-chrome --enable-precise-memory-info --enable-memory-info

#MacOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --enable-precise-memory-info --enable-memory-info
```

Otherwise the results from performance.memory are bucketed and less useful.
