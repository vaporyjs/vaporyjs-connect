/* eslint-env mocha */

"use strict";

var assert = require("chai").assert;
var createVaprpcConfiguration = require("../src/create-vaprpc-configuration");

describe("create-vaprpc-configuration", function () {
  var test = function (t) {
    it(t.description, function () {
      t.assertions(createVaprpcConfiguration(t.params.configuration));
    });
  };
  test({
    description: "create vaprpc configuration",
    params: {
      configuration: {
        http: "http://somewhere:1234",
        ws: "ws://somewhere.else:5678",
        ipc: null,
        api: { events: null, functions: null },
        contracts: { 3: { contract1: "0xc1", contract2: "0xc2" } },
        httpAddresses: ["http://somewhere:1234"],
        wsAddresses: ["ws://somewhere.else:5678"],
        ipcAddresses: []
      }
    },
    assertions: function (vaprpcConfiguration) {
      assert.deepEqual(vaprpcConfiguration.httpAddresses, ["http://somewhere:1234"]);
      assert.deepEqual(vaprpcConfiguration.wsAddresses, ["ws://somewhere.else:5678"]);
      assert.deepEqual(vaprpcConfiguration.ipcAddresses, []);
    }
  });
});
