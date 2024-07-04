import { IUserGateway } from "@/domains/models/user.interface";
import { generateFakeUser } from "../../utils/fakeData/users";

export class UserGateway implements IUserGateway {
  async fetchUserProfile(): Promise<any> {
    return generateFakeUser();
  }

  async updateUserProfile(userId: string, updatedData: Partial<any>): Promise<any> {
    // Simulez une mise à jour et renvoyez les données mises à jour
    return { ...generateFakeUser(), ...updatedData };
  }
}
