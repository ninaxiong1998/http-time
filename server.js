"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const api_routes_1 = require("./routes/api-routes");
const port = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
const apiRouter = new api_routes_1.ApiRouter;
// app.use((request: Request, response: Response, next: NextFunction) => {
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   next();
// });
app.use('', apiRouter.router);
// app.use((request: Request, response: Response) => {
//   response.type('text/plain');
//   response.status(404)
//   response.send('Page is not found.');
// })
app.listen(port, () => {
    console.log(`server is running on http://localhost:5000`);
});
