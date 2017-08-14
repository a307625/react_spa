const express = require('express');
const path = require('path');
const app = express();

const projectRootPath = path.resolve(__dirname, '../');
const ClientStatsPath = path.resolve(projectRootPath, './static/stats.json');
const ServerRendererPath = path.resolve(projectRootPath, './static/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use(ServerRenderer(Stats));

app.listen(3000);
