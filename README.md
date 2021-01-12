# vaporyjs-connect

[![Build Status](https://travis-ci.org/vaporyjs/vaporyjs-connect.svg)](https://travis-ci.org/vaporyjs/vaporyjs-connect) [![Coverage Status](https://coveralls.io/repos/vaporyjs/vaporyjs-connect/badge.svg?branch=master&service=github)](https://coveralls.io/github/vaporyjs/vaporyjs-connect?branch=master) [![npm version](https://badge.fury.io/js/vaporyjs-connect.svg)](http://badge.fury.io/js/vaporyjs-connect)

vaporyjs-connect automates a few basic Vapory network connection tasks: looks up the network ID, the coinbase address, sets the `from` field for transaction objects, and (optionally) will setup functions and events ABIs for use with [vaprpc](https://github.com/vaporyjs/vaprpc).  For examples of contracts and API inputs, see [augur-contracts](https://github.com/volut/augur-contracts).  (Important note: the static API setup in vaporyjs-connect is not yet compatible with [web3](https://github.com/vapory/web3)!)

## Usage

```
$ npm install vaporyjs-connect
```

To use vaporyjs-connect in Node.js, simply require it:

```javascript
var connector = require("vaporyjs-connect");
```

A minified, browserified file `dist/vaporyjs-connect.min.js` is included for use in the browser.  Including this file attaches a `connector` object to `window`:

```html
<script src="dist/vaporyjs-connect.min.js" type="text/javascript"></script>
```

To specify the connection endpoint, pass your RPC/IPC connection info to `connector.connect`:

```javascript
// Connect with only HTTP RPC support
connector.connect({http: "http://localhost:8545"});

// Connect to a local node using HTTP (on port 8545) and WebSockets (on port 8546)
connector.connect({http: "http://localhost:8545", ws: "ws://localhost:8546"});

// Connect to a local Vapory node with IPC support
var ipcpath = require("path").join(process.env.HOME, ".vapory", "gvap.ipc");
var vitals = connector.connect({http: "http://localhost:8545", ipc: ipcpath});
// vitals fields;
//   networkID  // which blockchain you're connected to
//   coinbase   // sets the "from" address for outgoing transactions
//   contracts  // contract addresses
//   api        // static API data (for use with vaprpc transactions)
```

If the last argument provided to `connector.connect` is a function, it will connect asynchronously:

```javascript
connector.connect({http: "https://eth3.augur.net", ws: "ws://ws.augur.net"}, function (vitals) {
  /* woohoo */
});
```

By default, `vitals.coinbase` is used to set the `from` field for outgoing transactions.  However, you can manually set it to something else (for example, for client-side transactions):

```javascript
info.abi.functions = connector.setFrom(info.abi.functions, "0x0000000000000000000000000000000000000b0b");
```

## Tests

```
$ npm test
```
