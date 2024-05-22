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
exports.productServices = void 0;
const product_model_1 = require("../product.model");
// data post
const createProductDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.ProductModel.create(product);
    return res;
});
//  get all product
const getAllProductDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const regex = new RegExp(searchTerm, "i");
        const res = yield product_model_1.ProductModel.find({
            $or: [{ name: { $regex: regex } }, { tags: { $regex: regex } }],
        });
        return res;
    }
    else {
        const res = yield product_model_1.ProductModel.find();
        return res;
    }
});
// get single product
const getSingleProductDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(productId);
    const res = yield product_model_1.ProductModel.findOne({ _id: productId });
    return res;
});
// update product
const updateProductDB = (productId, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.ProductModel.findByIdAndUpdate(productId, productData, {
        new: true,
    });
    return res;
});
// update product
const deleteProductDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_model_1.ProductModel.deleteOne({ _id: productId });
    return res;
});
exports.productServices = {
    createProductDB,
    getAllProductDB,
    getSingleProductDB,
    updateProductDB,
    deleteProductDB,
};
