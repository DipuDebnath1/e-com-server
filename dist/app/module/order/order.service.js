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
exports.orderService = void 0;
const order_model_1 = require("../order.model");
const product_model_1 = require("../product.model");
const postOrderDB = (email, productId, price, quantity) => __awaiter(void 0, void 0, void 0, function* () {
    const isExist = yield product_model_1.ProductModel.findById(productId);
    if (!isExist) {
        console.log("(!isExist");
        throw new Error("Sorry Product not available");
    }
    if (isExist.inventory.quantity < quantity) {
        console.log("isExist.inventory.quantity < quantity");
        throw new Error("Sorry Product quantity is not available ");
    }
    // post order
    const newOrder = new order_model_1.OrderModel({ email, productId, price, quantity });
    yield newOrder.save();
    return newOrder;
});
// get all orders
const findAllOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const findOrderWithMail = yield order_model_1.OrderModel.find({ email: email });
        return findOrderWithMail;
    }
    const newOrder = yield order_model_1.OrderModel.find();
    return newOrder;
});
exports.orderService = {
    postOrderDB,
    findAllOrder,
};
