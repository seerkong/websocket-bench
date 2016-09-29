module.exports = {
       /**
        * Before connection (optional, just for faye)
        * @param {client} client connection
        */
       beforeConnect : function(client) {
         // Example: 
         // client.setHeader('Authorization', 'OAuth abcd-1234'); 
         // client.disable('websocket'); 
       },
 
       /**
        * On client connection (required)
        * @param {client} client connection
        * @param {done} callback function(err) {}
        */
       onConnect : function(client, done) {
         // Faye client 
         // client.subscribe('/channel', function(message) { }); 
 
         // Socket.io client 
         // client.emit('test', { hello: 'world' }); 
 
         // Primus client 
         // client.write('Sailing the seas of cheese'); 
 
         // WAMP session 
         // client.subscribe('com.myapp.hello').then(function(args) { }); 
         done();
       },
 
       /**
        * Send a message (required)
        * @param {client} client connection
        * @param {done} callback function(err) {}
        */
       sendMessage : function(client, done) {
         // Example: 
         // client.emit('test', { hello: 'world' }); 
         // client.publish('/test', { hello: 'world' }); 
         // client.call('com.myapp.add2', [2, 3]).then(function (res) { }); 
         // client.send("hello world"); // sockjs
         // var msg = {
         //    "action": "PLAYER1_LOGIN",
         //    "header": {"token": "abc"},
         //    "body": {}
         //  };
         // client.send(JSON.stringify(msg));
         // done();
       },
 
       /**
        * WAMP connection options
        */
       options : {
         // realm: 'chat' 
       }
    };