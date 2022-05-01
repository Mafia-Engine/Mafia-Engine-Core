import protocol from 'http';
import path from 'path';
import express from 'express';
import { config as loadEnvironment } from 'dotenv';
import cors from 'cors';

loadEnvironment();
const PORT = process.env.PORT || 3001;
const app = express();
const server = protocol.createServer(app);
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.get('*', (_req, res) => {
	res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});
app.use(cors({}))
server.listen(PORT, () => {
	console.log(`REST Client Connected. PORT=${PORT}`);
});