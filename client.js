const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.0.103',
    port: 50541,
    
  });
  conn.on('connect', () => {
    console.log('You successfully connected to the game server. Enjoy!');
  });
  //When connected, client returns those two informations. Name + Move: up.
  conn.on('connect', () => {
    conn.write(`Name: FRE`);
    //conn.write(`Move: down`);
    //setInterval(() => {conn.write(`Move: left`)}, 50)
  });
  //Handling event of client being rejected from server from idling
  conn.on('data', data => {
    console.log('you ded cuz you idled');
  });


  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  return conn;
}

//console.log('Connecting ...');
//connect();

module.exports = { connect };