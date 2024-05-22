"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const order_validation_1 = require("./order.validation");
const validateOrder = (req, res, next) => {
    try {
        order_validation_1.validationOrder.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.errors.map((err) => ({
                    path: err.path,
                    message: err.message,
                })),
            });
        }
        next(error);
    }
};
exports.default = validateOrder;
