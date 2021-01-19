# http-response-details

Example (pure Node.js) :
```

const httpCodes = require("http-response-details");

console.log(httpCodes["400"]);
console.log(httpCodes["201"]);
```

Example (react.js) : 
```
import React from "react";
const httpCodes = require("http-response-details");

class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log("test");
    //console.log(httpCodes);
    console.log(httpCodes["400"]);
    console.log(httpCodes["201"]);
    //or inside other life-cycle method or anywhere
  }

  render() {
    return <div />;
  }
}

export default App;
```

Codesandbox.io : https://codesandbox.io/s/http-response-details-example-39lhm?file=/src/App.js
