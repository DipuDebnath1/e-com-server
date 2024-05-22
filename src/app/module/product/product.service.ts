 import { ProductModel } from "../product.model";
import { Product } from "./product.interface";
// data post 
const createProductDB = async (product: Product) => {
  const res = await ProductModel.create(product);
   return res;
};
//  get all product 
const getAllProductDB = async (searchTerm?:string) => {
  // if (searchTerm) {
  //   const res = await ProductModel.find({ $tags: { $search: searchTerm } });
  //   return res;
  // } else {
  //   const res = await ProductModel.find();
  //   return res;
  // }
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i'); 
    const res = await ProductModel.find({
      $or: [
        { name: { $regex: regex } },
        { tags: { $regex: regex } },
        ],
    });
    return res;
  } else {
    const res = await ProductModel.find();
    return res;
  }
}

// get single product 
const getSingleProductDB = async(productId:string) =>{
  console.log(productId);
    const res = await ProductModel.findOne({_id:productId});
    return res;
}
// update product 
const updateProductDB = async(productId:string, productData:Product) =>{
     const res = await ProductModel.findByIdAndUpdate(productId, productData,{ new: true });     
    return res;
}
// update product 
const deleteProductDB = async(productId:string) =>{
     const res = await ProductModel.deleteOne({_id:productId});     
    return res;
}
export const productServices = {
  createProductDB,
  getAllProductDB,
  getSingleProductDB,
  updateProductDB,
  deleteProductDB
 
};
