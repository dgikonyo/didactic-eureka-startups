import axios from 'axios';
import type { User } from '@/types/User';
import type { LoginDto } from '@/types/User';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export class AuthService {
  async registerUser(user: User): Promise<any> {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/register/users`,
        user
      );

      // return response.data;
    } catch (error) {
      return error;
    }
  }

  async loginInUser(payload: LoginDto): Promise<any> {
    try {
      const response = await axios.post(`${BACKEND_URL}/auth/sign-in`, payload);

      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  decode(token: string, secret: string, algorithm: string) {

  }
}
