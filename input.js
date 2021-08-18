// following code sets up an user interface to take in user inputs using stdin

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  const handleUserInput = (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  };
  return stdin;
};

module.exports = setupInput;