"use strict";

function setFrom(functionsABI, fromAddress) {
  var contract, method;
  if (!fromAddress || !functionsABI) return functionsABI;
  for (contract in functionsABI) {
    if (functionsABI.hasOwnProperty(contract)) {
      for (method in functionsABI[contract]) {
        if (functionsABI[contract].hasOwnProperty(method)) {
          functionsABI[contract][method].from = fromAddress;
        }
      }
    }
  }
  return functionsABI;
}

module.exports = setFrom;
