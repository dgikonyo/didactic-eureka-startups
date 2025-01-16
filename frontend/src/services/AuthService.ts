import axios from 'axios';
import type { User } from '@/types/User';
import type { LoginDto } from '@/types/User';
import {jwtDecode} from 'jwt-decode';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const JWT_SECRET = import.meta.env.VITE_SECRET_KEY;
const JWT_ALGORITHM = import.meta.env.VITE_JWT_ALGORITHM;

export class AuthService {
  async registerUser(user: User): Promise<any> {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/register/users`,
        user
      );

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async loginInUser(payload: LoginDto): Promise<any> {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, payload);

      const decoded_info = this.decodeToken(response.data);
      console.log(decoded_info);
      return decoded_info;
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  private async decodeToken(token: any) {
    return jwtDecode(token);
  }
}
