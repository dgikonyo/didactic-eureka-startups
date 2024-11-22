import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { Campaign } from '@/types/Campaign';
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
  state: () => ({
    campaignData: {
      category: '',
      sub_category: '',
      country: '',
      currency: '',
      title: '',
      tagLine: '',
      cardImage: '',
      location: '',
      tags: '',
      startDate: '',
      endDate: '',
      duration: '',
      targetAmount: '',
      videoUrl: '',
      videoOverlayUrl: '',
      story: '',
      supportEmail: '',
      fundingModel: '',
      user_id: '',
      campaignStatus: '',
      countryId: '',
    },
  });

  actions: {
    async saveCampaignData() {
    
        const response = await registerCampaign(this.campaignData)
 
    }
  }
});
