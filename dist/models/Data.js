"use strict";
//src/models/Data.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dataSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    information: {
        strength: {
            type: Number,
            required: true,
        },
        lives: {
            type: Number,
            required: true,
        },
    },
    text: {
        type: String,
        required: true,
    }
});
const Data = mongoose_1.default.model("enemies", dataSchema);
exports.default = Data;
