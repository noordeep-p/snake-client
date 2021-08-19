// stores the active tcp object
let connection;

// following code sets up an user interface to take in user inputs using stdin

const setupInput = function(conn) {
  connection = conn;
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
    if (key === "w") {
      connection.write("Move: up");
    }
    if (key === 's') {
      connection.write("Move: down");
    }
    if (key === "d") {
      connection.write('Move: right');
    }
    if (key === "a") {
      connection.write('Move: left');
    }
    if (key === "q") {
      connection.write("Say: HI!");
    }
    if (key === "e") {
      connection.write("Say: I WIN!");
    }
  };
  return stdin;
};

module.exports = setupInput;