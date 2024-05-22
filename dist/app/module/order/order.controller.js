"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
// post order
const OrderPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, productId, price, quantity } = req.body;
        const result = yield order_service_1.orderService.postOrderDB(email, productId, price, quantity);
        res.status(200).json({
            success: true,
            message: `Order created successfully!`,
            data: result,
        });
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "order created failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
// get all order
const GetAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderService.findAllOrder(email);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: true,
            data: "error",
        });
    }
});
exports.OrderController = {
    OrderPost,
    GetAllOrder,
};
