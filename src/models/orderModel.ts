import { RowDataPacket } from 'mysql2';
import connection from './connection';

const getOrdersAll = async () => {
  let query = 'SELECT * FROM Trybesmith.Orders';

  const [orders] = await connection.execute<RowDataPacket[]>(query);

  query = 'SELECT id FROM Trybesmith.Products WHERE orderId=? ORDER BY id';

  const newOrder = orders.map(async ({ id, userId }) => {
    const [products] = await connection.execute<RowDataPacket[]>(query, [id]);
    const productsIds = products.map((ele) => ele.id);

    return {
      id,
      userId,
      productsIds,
    };
  });

  const result = await Promise.all(newOrder);

  return result;
};

const orderModel = { getOrdersAll };
 
export default orderModel;