const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { applyRateLimiter } = require("./utilis/rateLimiter");
const { authenticateRequest } = require("./utilis/requestAuthenticator");
const app = express();
app.use(cors());
app.use(express.json());
//host.docker.internal
app.use("/api/auth", applyRateLimiter, proxy("host.docker.internal:8001"));
app.use(
  "/api/course",
  applyRateLimiter,
  authenticateRequest,
  proxy("host.docker.internal:8002")
);
app.use(
  "/api/guest/course",
  applyRateLimiter,
  proxy("host.docker.internal:8002")
);
app.use(
  "/api/learner",
  applyRateLimiter,
  authenticateRequest,
  proxy("host.docker.internal:8003")
);
app.use(
  "/api/notification",
  applyRateLimiter,
  proxy("host.docker.internal:8004")
);
app.use(
  "/api/payment",
  applyRateLimiter,
  authenticateRequest,
  proxy("host.docker.internal:8005")
);
app.use(
  "/api/user",
  applyRateLimiter,
  authenticateRequest,
  proxy("host.docker.internal:8006")
);

//Exporting app to be used by the server.js
module.exports = app;
