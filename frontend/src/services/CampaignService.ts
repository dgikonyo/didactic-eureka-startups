import type { Campaign } from '@/types/Campaign';
import type { Country } from '@/data/menu_data';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerCampaign = async (
  campaign: Campaign
): Promise<Campaign> => {
  const response = await axios.post(`${BACKEND_URL}`, campaign);
  return response.data;
};

export const fetchCountries = async (country: Country): Promise<Country> => {
  const response = await axios.get(`${BACKEND_URL}`);
  return response.data;
};
