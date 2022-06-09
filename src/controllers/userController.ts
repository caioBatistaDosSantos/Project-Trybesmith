import { Request, Response } from 'express';
import userService from '../services/userService';
import { HTTP_CREATED_STATUS } from '../utils/status-HTTP';

const createUser = async (req: Request, res: Response) => {
  const { username, classe, level, password } = req.body;

  await userService.createUser(username, classe, level, password);

  return res.status(HTTP_CREATED_STATUS).json({
    token: 'token-test',
  });
};

const userController = { createUser };

export default userController;