import "dotenv/config";
import express from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import leadsRouter from './routes/leads.js';

const app = express();
app.disable('x-powered-by');
app.use(compression());

// trust proxy for correct client IPs on Heroku
app.set('trust proxy', 1);

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.use('/api/leads', leadsRouter);

// health
app.get('/healthz', (_req, res) => res.status(200).send('ok'));

// Serve SPA only if a build exists
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDist = path.resolve(__dirname, '../../client/dist');
const hasClientBuild = fs.existsSync(path.join(clientDist, 'index.html'));

if (hasClientBuild) {
  app.use(express.static(clientDist, { maxAge: '1h', extensions: ['html'] }));
  app.get(/^\/(?!healthz).*/, (_req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });
} else {
  console.log('[server] client/dist not found — running API-only (use Vite dev server for UI)');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`[server] listening on :${PORT}`));
