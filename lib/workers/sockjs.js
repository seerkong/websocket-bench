/*global module, require*/
var SockJS       = require('sockjs-client'),
  util       = require('util'),
  BaseWorker = require('./baseworker.js'),
  logger     = require('../logger.js');

/**
 * SockjsWorker Worker class inherits form BaseWorker
 */
var SockjsWorker = function (server, generator) {
  SockjsWorker.super_.apply(this, arguments);
};

util.inherits(SockjsWorker, BaseWorker);

SockjsWorker.prototype.createClient = function (callback) {
  var self = this;
  // var client = io.connect(this.server, { 'force new connection' : true});
  
  var client = new SockJS(this.server);
  client.onopen = function() {
     // console.log('open');
     callback(false, client);
  };
  // client.onmessage = function(e) {
  //    console.log('message', e.data);
  // };
  // client.onclose = function() {
  //    console.log('close');
  // };




  // client.on('connect', function () {
  //   callback(false, client);
  // });

  // client.on('connect_error', function (err) {
  //   if (self.verbose) {
  //     logger.error("SocketIO Worker connect_failed" + JSON.stringify(err));
  //   }
  //   callback(true, client);
  // });

  // client.on('error', function (err) {
  //   if (self.verbose) {
  //     logger.error("SocketIO Worker error: " + JSON.stringify(err));
  //   }
  //   callback(true, client);
  // });
};

module.exports = SockjsWorker;
