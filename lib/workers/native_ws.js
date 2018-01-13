/*global module, require*/
var util       = require('util'),
  BaseWorker = require('./baseworker.js'),
  logger     = require('../logger.js');
const WebSocket = require('ws');
/**
 * NativeWsWorker Worker class inherits form BaseWorker
 */
var NativeWsWorker = function (server, generator) {
  NativeWsWorker.super_.apply(this, arguments);
};

util.inherits(NativeWsWorker, BaseWorker);

NativeWsWorker.prototype.createClient = function (callback) {

  var self = this;
  // var client = io.connect(this.server, { 'force new connection' : true});
  console.log(this.server)

  var ws = new WebSocket(this.server)

  ws.onmessage = function(e) {
    console.log(e.data)
  }

  ws.onopen = function() {
    console.log('opening...')
    // ws.send('hello server')
    callback(false, ws);
  }

  ws.onerror = function(error) {
    console.log('WEbSocket error ' + error)
    // console.dir(error)
  }
};

module.exports = NativeWsWorker;
