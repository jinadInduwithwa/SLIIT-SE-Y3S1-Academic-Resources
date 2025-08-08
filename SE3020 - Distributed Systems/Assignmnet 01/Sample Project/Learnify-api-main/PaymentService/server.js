/**
 * @description - Initiating HTTP server and listning to incoming http requests
 */

//Imports and Requires
const http = require("http");
const app = require("./app");

require("dotenv").config();

console.log("Server Js executing... Initiating HTTP server");
const port = process.env.PORT;

//Creates HTTP server
const server = http.createServer(app);

//Server then  listen to the port (8005)
server.listen(port, () => {
  console.log(`Payment Server is running on port ${port}`);
});
