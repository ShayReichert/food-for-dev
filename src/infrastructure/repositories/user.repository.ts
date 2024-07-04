import { IUserRepository } from "../../domains/models/user.interface";
import { IUserGateway } from "../../domains/models/user.interface";
import { User } from "../../domains/entities/user.entity";

export class UserRepository implements IUserRepository {
  private userGateway: IUserGateway;

  constructor(userGateway: IUserGateway) {
    this.userGateway = userGateway;
  }

  async getUserProfile(): Promise<User> {
    const userData = await this.userGateway.fetchUserProfile();
    return new User(userData.id, userData.name, userData.email, userData.preferences, userData.goals);
  }

  async updateUserProfile(userId: string, updatedData: Partial<User>): Promise<User> {
    const userData = await this.userGateway.updateUserProfile(userId, updatedData);
    return new User(userData.id, userData.name, userData.email, userData.preferences, userData.goals);
  }
}
