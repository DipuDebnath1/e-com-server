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
exports.productControllers = void 0;
const product_service_1 = require("./product.service");
const product_validation_1 = require("./product.validation");
//create product
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product } = req.body;
        const validProduct = product_validation_1.validationProductSchema.parse(product);
        const result = yield product_service_1.productServices.createProductDB(validProduct);
        res.status(200).json({
            success: true,
            message: "product created successfully",
            data: result,
        });
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "product created failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
// get all product
const GetAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        const result = yield product_service_1.productServices.getAllProductDB(searchTerm);
        if (searchTerm) {
            res.status(200).json({
                success: true,
                message: `all ${searchTerm} Products fetched successfully!`,
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "product created failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
// get single product
const GetSingleProductDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.getSingleProductDB(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "product created failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
//  update product
const UpdateProductDB = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productData = req.body;
        const { productId } = req.params;
        const result = yield product_service_1.productServices.updateProductDB(productId, productData);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "product created failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
//delete product
const DeleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.productServices.deleteProductDB(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: {
                success: true,
                message: "Product deleted successfully!",
                data: result,
            },
        });
    }
    catch (err) {
        let errorMessage;
        if (err instanceof Error) {
            errorMessage = err.message;
        }
        else {
            errorMessage = "product deleted failed";
        }
        res.status(500).json({
            success: false,
            message: errorMessage,
            data: "error!!!",
        });
    }
});
exports.productControllers = {
    createProduct,
    GetAllProduct,
    GetSingleProductDB,
    UpdateProductDB,
    DeleteProduct,
};
