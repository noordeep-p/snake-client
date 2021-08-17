const net = require("net");

// the following code establishes a connection with the game server

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret the data incoming as text

  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log("Server says:", data);
  });
  
  return conn;
};

console.log("Connecting ...");
connect();