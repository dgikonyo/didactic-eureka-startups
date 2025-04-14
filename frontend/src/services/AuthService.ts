import axios from 'axios';
import type { User, LoginDto } from '@/types/User';
import { useRouter } from 'vue-router';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const router = useRouter();

export default class AuthService {
  async registerUser(user: User): Promise<any> {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/auth/register/users`,
        user
      );

      console.log(response.data);
      router.push('/sign-in');

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async loginInUser(payload: LoginDto): Promise<any> {
    try {
      const response = await axios
        .post(`${BACKEND_URL}/auth/sign-in`, payload)
        .then((res) => {
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
}
