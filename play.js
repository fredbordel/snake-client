const connect = require('./client');
//console.log('Connecting ...');
//connect();


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
  }
  })
  return stdin;
};

setupInput();


