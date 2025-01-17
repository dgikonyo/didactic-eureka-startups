<script lang="ts">
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import '../../assets/main.css'
import type { LoginDto } from '@/types/User';
import { useAuthStore } from '@/stores';
// https://www.bezkoder.com/vue-3-authentication-jwt/
export default {
    name: 'Login',
    components: {
        RouterLink
    },
    setup() {
        const authStore = useAuthStore();
        const router = useRouter();

        const validationErrors = ref<Record<string, string>>({});
        const loginDto = ref<LoginDto>({ email: '', password: '' });
        const isSubmitting = ref(false);
        const message = ref('');


        const loginAction: any = async () => {
            validationErrors.value = {}; // Reset errors
            isSubmitting.value = true;

            // Validation logic
            if (!loginDto.value.email) {
                validationErrors.value.email = 'Email is required';
            } if (!loginDto.value.password) {
                validationErrors.value.password = 'Password is required';
            }

            if (Object.keys(validationErrors.value).length > 0) {
                isSubmitting.value = false;
                return;
            }

            try {
                await authStore.login(loginDto.value);
                router.push('/campaign/:id');
            } catch (error: any) {
                message.value = error.response?.data?.message || error.message || 'Login failed.';
            } finally { isSubmitting.value = false; }
        };

        return {
            loginDto,
            validationErrors,
            isSubmitting,
            message,
            loginAction,
        }
    }
}
</script>
<template>
    <section class="login-section">
        <div class="auth-login container">
            <div class="page-title">
                <p class="page-title-text">Konnect</p>
            </div>
            <div class="page-sub-title">
                <p class="page-sub-title-text">Log In</p>
            </div>
            <form @submit.prevent="loginAction" class="form">
                <div class="auth-email">
                    <input v-model="loginDto.email" class="form-input" placeholder="Email" type="text" name="email"
                        :class="{ error: validationErrors.email }" />
                    <span v-if="validationErrors.email" class="error-message">
                        {{ validationErrors.email }}
                    </span>
                </div>
                <div class="auth-password">
                    <input v-model="loginDto.password" class="form-input" placeholder="Password" type="password"
                        name="password" :class="{ error: validationErrors.password }" />
                    <span class="password-icon" id="eye-icon">
                        <font-awesome-icon :icon="['fab', 'eye']" class="eye-icon" />
                    </span>
                </div>
                <div class="login-button">
                    <button :disabled="isSubmitting" class="btn-primary" type="submit">Log In</button>
                </div>
                <div class="forgot-password">
                    <RouterLink to="/forgot-password" class="forgot-password-link">Forgot Password?</RouterLink>
                </div>
            </form>
        </div>
    </section>
</template>
