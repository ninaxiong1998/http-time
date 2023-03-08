// server.ts
import express, { Express, Request, Response, NextFunction } from 'express';
import { ApiRouter } from './routes/api-routes';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

const swaggerDocument = YAML.load('./docs/swagger.yaml');

const port = process.env.PORT || 5000;

const app: Express = express();
app.use(express.json());

const apiRouter = new ApiRouter;
app.use('', apiRouter.router);

var options = {
  explorer: true
};
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)}
);