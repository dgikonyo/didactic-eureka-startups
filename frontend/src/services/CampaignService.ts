import type { Campaign } from '@/types/Campaign';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const registerCampaign = async (
  campaign: Campaign
): Promise<Campaign> => {
  const response = await axios.post(`${BACKEND_URL}`, campaign);
  return response.data;
};
