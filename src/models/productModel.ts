import { ResultSetHeader } from 'mysql2';
import connection from './connection';
// import IterfaceProduct from '../interfaces/productInterface';

const getProductsAll = async () => {
  const query = 'SELECT * FROM Trybesmith.Products ORDER BY id';

  const [products] = await connection.execute(query);

  return products;
};

const createProduct = async (name: string, amount: string) => {
  const query = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

  const [registeredProduct] = await connection.execute<ResultSetHeader>(query, [name, amount]);

  const product = {
    id: registeredProduct.insertId,
    name,
    amount,
  };

  return product;
};

const productModel = {
  getProductsAll,
  createProduct,
};
 
export default productModel;