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
      const response = await axios({
        method:'POST',
        url:`${BACKEND_URL}/auth/register/users`,
        data: user
      });

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async loginInUser(payload: LoginDto): Promise<any> {
    try {
      const response = await axios({
        method:'POST',
        url:`${BACKEND_URL}/auth/sign-in`,
        data: payload
      }).then(res => {
        if (res.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(res.data));
        }

        return res;
      });
      
      return response.data;
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    }
  }

  async logout() {
    localStorage.removeItem('user');
  }

  private async decodeToken(token: any) {
    return jwtDecode(token);
  }
}
