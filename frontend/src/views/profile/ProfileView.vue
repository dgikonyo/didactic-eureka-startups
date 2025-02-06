<script lang="ts">
import { useAuthStore } from '@/stores';
import { useRouter } from 'vue-router';
import '../../assets/main.css';

export default {
	name: 'profile',
	setup() {
		const authStore = useAuthStore();
		const router = useRouter();

		if (authStore.loggedIn == false ){
			router.push('/sign-in');
		}

	
		return {
			
		}
	},
};
</script>
<template>
	<section class="profile-section">
		
	</section>
</template>