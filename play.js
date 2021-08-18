/* eslint-disable func-style */
const connect = require('./client');
console.log("Connecting ...");
connect();

// following code sets up an user interface to take in user inputs using stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  function handleUserInput(key) {
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

setupInput();