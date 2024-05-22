"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
// import { studentRoutes } from "./app/module/student/student.route";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application route
app.use("/api/v1/students", studentRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
