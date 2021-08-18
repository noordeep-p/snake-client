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
      conn.push("Move: up");
    }
    if (key === 's') {
      conn.push("Move: down");
    }
    if (key === "d") {
      conn.push('Move: right');
    }
    if (key === "a") {
      conn.push('Move: left');
    }
  };
  return stdin;
};

module.exports = setupInput;