<script lang="ts">
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';
import '../../assets/main.css';
import CampaignCard from '@/components/CampaignCard.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import type {User} from '@/types/User.ts';

export default {
  name: 'profile',
  components: {
    CampaignCard,
    NavbarComponent
  },
  setup() {
    const authStore = useAuthStore();
    const router = useRouter();

    if (!authStore.status.loggedIn) {
      router.push('/sign-in');
    }

  const isAuthenticated = authStore.user;
    return {
			isAuthenticated
    };
  },
};
</script>
<template>
	<section class="profile-section">
     <NavbarComponent></NavbarComponent>
		<CampaignCard/>
    {{isAuthenticated}}
	</section>
</template>