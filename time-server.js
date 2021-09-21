const net = require("net");

function verify(n) {
  return n < 10 ? "0" + n : n;
}

const server = net.createServer(function (socket) {
  d = new Date();
  s =
    d.getFullYear() +
    "-" +
    verify(d.getMonth() + 1) +
    "-" +
    verify(d.getDate()) +
    " " +
    verify(d.getHours()) +
    ":" +
    verify(d.getMinutes()) +
    "\n";
  socket.end(s);
});
server.listen(process.argv[2]);
