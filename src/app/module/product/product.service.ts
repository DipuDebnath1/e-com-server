 import { ProductModel } from "../product.model";
import { Product } from "./product.interface";

const createProductDB = async (product: Product) => {
  const res = await ProductModel.create(product);
   return res;
};
 
const getAllStudentDB = async () => {
  const res = await ProductModel.find();
  return res;
}
export const productServices = {
  createProductDB,
  getAllStudentDB
 
};
