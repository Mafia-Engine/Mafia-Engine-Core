import protocol from 'http';
import path from 'path';
import express from 'express';
import { config as loadEnvironment } from 'dotenv';
import cors from 'cors';
import apiRouter from './api_v1'

loadEnvironment();
const PORT = process.env.PORT || 3001;
const app = express();
const server = protocol.createServer(app);

app.use(cors({}))
app.use('/v1', apiRouter)

server.listen(PORT, () => {
	console.log(`REST Client Connected. PORT=${PORT}`);
});