import { User } from "../entities/user.entity";
import { IUserRepository } from "../models/user.interface";

export const updateUserProfile = async (userRepository: IUserRepository, userId: string, updatedData: Partial<User>): Promise<User> => {
  return await userRepository.updateUserProfile(userId, updatedData);
};
