import axios from "axios";
import { API_URL } from "../constants/API_URL";

//Rota para fazer login do usuário
export async function GetProductById(id) {
  try {
    const response = axios.get(`${API_URL}product/${id}`);

    return response;
  } catch (error) {
    return error;
  }
}
