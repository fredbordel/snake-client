const connect = require('./play')

let connection;

const setupInput = function(conn, callback) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', callback)
  return stdin;
};

handleUserInput = (key) => {
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 'a'){
    connection.write('Move: left')
  }
  if (key === 's'){
    connection.write('Move: down')
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === '\u0003') {
    process.exit();
}
  if (key === 'm') {
    connection.write("Say: I'm coming for you!")
  }
};

module.exports = { setupInput, handleUserInput };