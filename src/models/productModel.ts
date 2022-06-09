import { ResultSetHeader } from 'mysql2';
import connection from './connection';
// import IterfaceProduct from '../interfaces/productInterface';

const getAllProductsModel = async () => {
  const query = 'SELECT * FROM Trybesmith.Products ORDER BY id';

  const [products] = await connection.execute(query);

  return products;
};

const createProduct = async (name: string, quantity: string) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?)';

  const [registeredProduct] = await connection.execute<ResultSetHeader>(query, [name, quantity]);

  const product = {
    id: registeredProduct.insertId,
    name,
    quantity,
  };

  return product;
};
 
export { getAllProductsModel, createProduct };