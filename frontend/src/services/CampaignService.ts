import type { Campaign } from '@/types/Campaign';
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default class CampaignService {
  async registerCampaign(campaign: Campaign): Promise<any> {
    try {
      const response = await axios.post(`${BACKEND_URL}`, campaign);

      return response.data;
    } catch (error) {
      return error;
    }
  }

  async loadAllCampaigns(campaign: Campaign) {
    try {} catch(error) {}
  }
}
