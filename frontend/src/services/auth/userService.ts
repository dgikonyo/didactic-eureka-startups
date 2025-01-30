import axios from 'axios';
import { authHeader } from './authHeader';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export class UserService {
	getPublicContent() {
		return axios.get(BACKEND_URL + 'all');
	}

	getUserCampaignBoard() {
		return axios.get(BACKEND_URL + 'user', { headers: authHeader() });
	}

	getModeratorBoard() {
		return axios.get(BACKEND_URL + 'mod', { headers: authHeader() });
	}

	getAdminBoard() {
		return axios.get(BACKEND_URL + 'admin', { headers: authHeader() });
	}
}