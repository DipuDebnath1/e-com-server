"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/", product_controller_1.productControllers.createProduct);
router.get("/", product_controller_1.productControllers.GetAllProduct);
router.get("/:productId", product_controller_1.productControllers.GetSingleProductDB);
router.put("/:productId", product_controller_1.productControllers.UpdateProductDB);
router.delete("/:productId", product_controller_1.productControllers.DeleteProduct);
exports.productRoutes = router;
