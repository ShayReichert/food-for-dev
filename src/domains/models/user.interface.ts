import { User } from "../entities/user.entity";

export interface IUserRepository {
  getUserProfile(): Promise<User>;
  updateUserProfile(userId: string, updatedData: Partial<User>): Promise<User>;
}

export interface IUserGateway {
  fetchUserProfile(): Promise<any>;
  updateUserProfile(userId: string, updatedData: Partial<User>): Promise<any>;
}
