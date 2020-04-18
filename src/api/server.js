const express = require("express");
const cors = require("cors");
const projectRoutes = require("./routes/projectRoutes");

const server = express();
const baseUrl = "/api";

server.use(cors());
server.use(express.json());
server.use(baseUrl, projectRoutes);

module.exports = server;
