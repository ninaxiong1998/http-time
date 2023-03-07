// server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import { ApiRouter } from './routes/api-routes';
 
const port = process.env.PORT || 5000;

const app: Express = express();
app.use(express.json());

const apiRouter = new ApiRouter;
app.use('', apiRouter.router)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)}
);