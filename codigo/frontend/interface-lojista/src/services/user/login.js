import axios from "axios";
import { API_URL } from "../../constants/API_URL";

//Rota para fazer login do usuário
export async function Login(email, password) {
  try {
    const response = axios.post(`${API_URL}login`, {
      email: email,
      password: password,
    });

    return response;
  } catch (error) {
    return error;
  }
}
