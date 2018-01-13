// node ./index.js -g generator/evtmaster_generator.js -a 1600 -c 800 -t sockjs -m 30  http://www.huodongdashi.com:3008/sockjs

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
        //  console.log("onConnect");
         var clientId = Math.round(Math.random() * 10000 + 100);
         var msg = {
            "action": "MOBILE_TO_SRV_LOGIN",
            "header": {},
            "body": {
              "clientId": clientId,
            }
          };
          client._clientId = clientId;
         client.send(JSON.stringify(msg));

         done();
       },
 
       /**
        * Send a message (required)
        * @param {client} client connection
        * @param {done} callback function(err) {}
        */
       sendMessage : function(client, done) {
        console.log("send message");
         // Example: 
         // client.emit('test', { hello: 'world' }); 
         // client.publish('/test', { hello: 'world' }); 
         // client.call('com.myapp.add2', [2, 3]).then(function (res) { }); 
         // client.send("hello world"); // sockjs
         setTimeout(function() {
          var uid = Math.round(Math.random() * 100 + 100);
          var msg = {
             "action": "INCREASE_SCORE",
             "header": {},
             "body": {
               "score_increased": 1,
               //"uid": uid,
               "clientId": client._clientId,
               // "userinfo":{"mobile":"18612484032","uid":"580","activityId":"656","name":"2afasdfa","avatar":""}
             }
           };
          client.send(JSON.stringify(msg));
          done();
         }, 1000)



        
       },
 
       /**
        * WAMP connection options
        */
       options : {
         // realm: 'chat' 
       }
    };
