import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { validationOrder } from "./order.validation";

const validateOrder = (req: Request, res: Response, next: NextFunction) => {
  try {
    validationOrder.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
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

export default validateOrder;
