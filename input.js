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
      connection.push("Move: up");
    }
    if (key === 's') {
      connection.push("Move: down");
    }
    if (key === "d") {
      connection.push('Move: right');
    }
    if (key === "a") {
      connection.push('Move: left');
    }
    if (key === "q") {
      connection.push("Say: HI!");
    }
    if (key === "e") {
      connection.push("Say: I WIN!");
    }
  };
  return stdin;
};

module.exports = setupInput;