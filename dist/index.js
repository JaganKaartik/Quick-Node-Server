"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers/");
const app = express_1.default();
const path = require('path');
const port = process.env.PORT || 5000;
app.set('views', path.join(__dirname, './views'));
app.get('/', controllers_1.rootController);
app.listen(port, () => {
    console.log(`App running at port: ${port}`);
});
