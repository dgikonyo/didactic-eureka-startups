<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import '../../assets/main.css'
import type { User } from '@/types/User';
import type { LoginDto } from '@/types/User';
import { AuthService } from '@/services/AuthService';

const user = ref<User>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: new Date,
    country_id: new Number,
    password: '',
    role_id: new Number
});

const isSubmitting = ref(false);
const validationErrors = ref<Record<string, string>>({})
const authService = new AuthService();

const loginAction = async (event: Event) => {
    event.preventDefault(); //prevent form submission
    isSubmitting.value = true;
    validationErrors.value = {};

    const payload: LoginDto = {
        email: user.value.email,
        password: user.value.password
    };

    try {
        const response = await authService.loginInUser(payload);
    } catch (error) {
        isSubmitting.value = false;
        throw error;
    }

}
</script>
<template class="login-section">
    <div class="auth-login">
        <div class="page-title">
            <p class="page-text">Konnect - LogIn</p>
        </div>
        <form @submit.prevent="loginAction">
            <div class="auth-email">
                <input v-model="user.email" class="form-input" placeholder="email" type="text" name="email"
                    :class="{ error: validationErrors.email }" />
                <span v-if="validationErrors.email" class="error-message">
                    {{ validationErrors.email }}
                </span>
            </div>
            <div class="auth-password">
                <input v-model="user.password" class="form-input" placeholder="password" type="password" name="password"
                    :class="{ error: validationErrors.password }" />
                <span class="password-icon" id="eye-icon">
                    <font-awesome-icon :icon="['fab', 'eye']" class="eye-icon" />
                </span>
            </div>
            <button :disabled="isSubmitting" class="btn-login" type="submit">
                Log In
            </button>
        </form>
    </div>
</template>
