import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import type { Campaign } from '@/types/Campaign';
import { registerCampaign } from '@/services/CampaignService';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

export const useCampaignStore = defineStore('campaign', () => {
  const campaignData = ref<Campaign>({
    category: '',
    sub_category: '',
    country: '',
    currency: '',
    title: '',
    tagLine: '',
    cardImage: '',
    location: '',
    tags: '',
    startDate: new Date(),
    endDate: new Date(),
    duration: 0,
    targetAmount: 0,
    videoUrl: '',
    videoOverlayUrl: '',
    story: '',
    supportEmail: '',
    fundingModel: '',
    user_id: '',
    campaignStatus: '',
    countryId: 0,
  });

  const saveCampaignData = async () => {
    try {
      const response = await registerCampaign(campaignData.value);
      console.log('Campaign registered successfully:', response);
    } catch (error) {
      console.error('Error registering campaign:', error);
    }
  };

  return { campaignData, saveCampaignData };
});
