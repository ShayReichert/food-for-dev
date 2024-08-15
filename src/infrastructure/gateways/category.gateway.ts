import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

export interface ICategoryGateway {
  fetchCategories(): Promise<{ id: number; name: string }[]>;
}

export class CategoryGateway implements ICategoryGateway {
  async fetchCategories(): Promise<{ id: number; name: string }[]> {
    try {
      const response = await axios.get(`${baseURL}/category/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching categories from API", error);
      throw new Error("Unable to fetch categories");
    }
  }
}
