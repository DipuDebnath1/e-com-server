"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./app/module/product/product.route");
const order_route_1 = require("./app/module/order/order.route");
const body_parser_1 = __importDefault(require("body-parser"));
const routeUnow_1 = __importDefault(require("../src/routeUnow"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// application route
app.use("/api/products", product_route_1.productRoutes);
app.use("/api/orders", order_route_1.orderRoute);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(routeUnow_1.default);
exports.default = app;
// /api/products
