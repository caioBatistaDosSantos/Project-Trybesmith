import orderModel from '../models/orderModel';

const getOrdersAll = async () => {
  const order = await orderModel.getOrdersAll();
  
  return order;
};

const orderService = { getOrdersAll };

export default orderService;