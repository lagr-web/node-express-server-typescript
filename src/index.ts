//src/index.js

import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

const port: number = Number(process.env.PORT) || 3001;

app.get('/', (req: Request, res: Response) => {

  res.send('Express + TS Server');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});