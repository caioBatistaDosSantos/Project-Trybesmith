import userModel from '../models/userModel';

const createUser = async (username: string, classe: string, level: number, password: string) => {
  await userModel.createUser(username, classe, level, password);
};

const userService = { createUser };

export default userService;