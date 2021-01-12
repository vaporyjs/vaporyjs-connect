"use strict";

function createVaprpcConfiguration(configuration) {
  var vaprpcConfiguration = {
    connectionTimeout: 60000,
    errorHandler: function (err) { if (err) console.error(err); }
  };
  vaprpcConfiguration.httpAddresses = configuration.httpAddresses;
  vaprpcConfiguration.wsAddresses = configuration.wsAddresses;
  vaprpcConfiguration.ipcAddresses = configuration.ipcAddresses;
  vaprpcConfiguration.networkID = configuration.networkID;
  vaprpcConfiguration.startBlockStreamOnConnect = configuration.startBlockStreamOnConnect;
  return vaprpcConfiguration;
}

module.exports = createVaprpcConfiguration;
