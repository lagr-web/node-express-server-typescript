"use strict";
//src/index.js
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const Data_1 = __importDefault(require("./models/Data"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//const MONGO_URI = "mongodb://127.0.0.1:27017/Card";
//DB(MONGO_URI);
const port = Number(process.env.PORT) || 3002;
app.get('/', (req, res) => {
    res.send('Express + TS Server');
});
app.get('/getdata', async (req, res) => {
    try {
        const cards = await Data_1.default.find();
        res.json(cards);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
