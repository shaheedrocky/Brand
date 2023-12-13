import axios from "axios";
import { BASE_URL } from "../Constant/constant";

export const onGetAllCategories = async () => {
  try {
    const response = await axios.get(BASE_URL + "/products/categories");
    console.log("onGetAllCategories response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};

