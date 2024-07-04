import { User } from "../entities/user.entity";
import { IUserRepository } from "../models/user.interface";

export const getUserProfile = async (userRepository: IUserRepository): Promise<User> => {
  return await userRepository.getUserProfile();
};
