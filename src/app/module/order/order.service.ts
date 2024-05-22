import { OrderModel } from "../order.model";
import { ProductModel } from "../product.model";
 
const postOrderDB = async(  email: string, productId: string, price: number,quantity: number) => {

    const isExist = await ProductModel.findById(productId);

    if (!isExist) {
        console.log('(!isExist');
        
      throw new Error("Sorry Product not available");
    }
  
    if (isExist.inventory.quantity < quantity) {
        console.log('isExist.inventory.quantity < quantity');
      throw new Error("Sorry Product quantity is not available ");
    }

    // post order 
    const newOrder = new OrderModel({ email, productId, price, quantity });

      await newOrder.save();
    return newOrder;


}

// get all orders 
const findAllOrder = async(email:string) =>{
  if (email) {
    const findOrderWithMail = await OrderModel.find({ email: email });
    return findOrderWithMail;
  }
    const newOrder = await OrderModel.find();
    return newOrder

}
export const orderService = {
  postOrderDB,
  findAllOrder
};
