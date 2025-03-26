# 📡 http-response-details

## Example (pure Node.js) 🚀:
```javascript
const httpCodes = require("http-response-details");

console.log(httpCodes["400"]); // 🚫 Bad Request
console.log(httpCodes["201"]); // ✅ Created
```

## Example (React.js) ⚛️:
```javascript
import React from "react";
const httpCodes = require("http-response-details");

class App extends React.Component {
  constructor(props) {
    super(props);
    //console.log("test");
    //console.log(httpCodes);
    console.log(httpCodes["400"]); // 🚫 Bad Request
    console.log(httpCodes["201"]); // ✅ Created
    //or inside other life-cycle method or anywhere
  }

  render() {
    return <div />;
  }
}

export default App;
```

## Try it on CodeSandbox.io 🧪:
[https://codesandbox.io/s/http-response-details-example-39lhm?file=/src/App.js](https://codesandbox.io/s/http-response-details-example-39lhm?file=/src/App.js)
