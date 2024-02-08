//src/index.js

import express, { Express } from 'express';
import dotenv from "dotenv";
import connectToDB from './db';
import routes from './routers/routes';

dotenv.config();

const app: Express = express();

app.use('/', routes);

(async () => {

  const MONGO_URI: string = "mongodb://127.0.0.1:27017/Card";
  await connectToDB(MONGO_URI);

})()

const port: number = Number(process.env.PORT) || 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});