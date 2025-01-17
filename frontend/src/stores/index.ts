// stores all modules
import { defineStore } from 'pinia';
import type { User } from '@/types/User';
import { AuthService } from '../services/AuthService';
import type { LoginDto } from '@/types/User';

const authService = new AuthService;

export const useAuthStore = defineStore('auth', {
    state: () => {
        const storedUser = (() => {
            try {
                return JSON.parse(localStorage.getItem('user') || 'null');
            } catch (error) {
                return null;
            }
        })();

        return {
            status: { loggedIn: !!storedUser },
            user: storedUser as User | null,
        }
    },
    actions: {
        async login(payload: LoginDto) {
            try {
                const user = await authService.loginInUser(payload);

                // update state
                this.status.loggedIn = true;
                this.user = user;

                // save to local storage
                localStorage.setItem('user', JSON.stringify(user));
            } catch (error) {
                this.status.loggedIn = false;
                this.user = null;
                throw error; // Rethrow to handle in the component
            }
        },
        logout() {
            authService.logout();

            // clear state
            this.status.loggedIn = false;
            this.user = null;

            localStorage.removeItem('user');
        },
        async register(payload: User) {
            try {
                const response = await authService.registerUser(payload);

                // Registration doesn't log in the user by default
                this.status.loggedIn = false;

                return response.data; // Return data to the component
            } catch (error) {
                this.status.loggedIn = false;
                throw error;
            }
        }
    }
});