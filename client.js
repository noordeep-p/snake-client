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

  conn.on("connect", () => {
    console.log("Connection with server established!");
  });

  conn.on("connect", () => {
    conn.write("Name: NSP");
  });

  // folowing code is used as an example exercise to test sanke moves but is hard coded and thus commented out
  // conn.on("connect", () => {
  //   conn.write("Move: up");
  // });
  
  return conn;
};

module.exports = connect;