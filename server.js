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
app.use('', apiRouter.router);
app.listen(port, () => {
    console.log(`server is running on http://localhost:5000`);
});
