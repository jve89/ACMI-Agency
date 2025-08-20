import express from 'express';
import compression from 'compression';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.disable('x-powered-by');
app.use(compression());

// health
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

// serve Vite build from client/dist in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../../client/dist');

app.use(express.static(clientDist, { maxAge: '1h', extensions: ['html'] }));

// send index.html for any non-file request (exclude /healthz)
app.get(/^\/(?!healthz).*/, (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`[server] listening on :${PORT}`));
