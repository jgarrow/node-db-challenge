const express = require("express");
const cors = require("cors");
const projectRoutes = require("./api/routes/projectRoutes");
const resourceRoutes = require("./api/routes/resourceRoutes");
const taskRoutes = require("./api/routes/taskRoutes");

const server = express();
const baseUrl = "/api";

server.use(cors());
server.use(express.json());
server.use(`${baseUrl}/projects`, projectRoutes);
server.use(`${baseUrl}/resources`, resourceRoutes);
server.use(baseUrl, taskRoutes);

module.exports = server;
