import { ResultSetHeader } from 'mysql2';
import connection from './connection';

const createUser = async (username: string, classe: string, level: number, password: string) => {
  const query = `INSERT INTO Trybesmith.Users 
  (username, classe, level, password) VALUES (?, ?, ?, ?)`;

  await connection.execute<ResultSetHeader>(query, [username, classe, level, password]);
};

const userModel = {
  createUser,
};
 
export default userModel;