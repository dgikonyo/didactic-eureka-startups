<script lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import '../../assets/main.css'
import type { User } from '@/types/User';
import { AuthService } from '@/services/AuthService';

export default {
    name: 'Sign Up',
    components: {
        RouterLink
    },
    setup() {
        const formData = ref<User>({
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: new Date,
            country_id: new Number,
            role_id: new Number,
            password: '',
        });

        const authService = new AuthService;

        const validationErrors = ref<Record<string, string>>({});
        const isSubmitting = ref(false);

        const handleSubmit = () => {
            validationErrors.value = {};

            if (!formData.value.username) validationErrors.value.username = 'Username is required';
            if (!formData.value.firstName) validationErrors.value.firstName = 'First Name is required';
            if (!formData.value.lastName) validationErrors.value.lastName = 'Last Name is required';
            if (!formData.value.email) validationErrors.value.email = 'Email is required';
            if (!formData.value.password) validationErrors.value.password = 'Password is required';

            // If no errors, proceed with form submission (or API call)
            if (Object.keys(validationErrors.value).length === 0) {
                try {
                    return authService.registerUser(formData.value);

                } catch (error: any) {
                    console.log(validationErrors.value.error = error.message);
                }
            }
        }

        return {
            formData,
            isSubmitting,
            validationErrors,
            handleSubmit
        }
    }
}

</script>
<template>
    <section class="sign-up-form">
        <div class="form-container">
            <div class="page-title">
                <p class="page-title-text">Konnect</p>
            </div>

            <div class="page-sub-title">
                <p class="page-sub-title-text">Sign Up</p>
            </div>
            <form @submit.prevent="handleSubmit" class="form">
                <!-- Username -->
                <div class="form-group">
                    <input v-model="formData.username" id="username" type="text" class="form-input"
                        placeholder="Username" :class="{ error: validationErrors.username }" />
                </div>
                <span v-if="validationErrors.username" class="error-message">{{ validationErrors.username }}</span>

                <!-- First Name -->
                <div class="form-group">
                    <input v-model="formData.firstName" id="firstName" type="text" class="form-input"
                        placeholder="First Name" :class="{ error: validationErrors.firstName }" />
                </div>
                <span v-if="validationErrors.firstName" class="error-message">{{ validationErrors.firstName }}</span>

                <!-- Last Name -->
                <div class="form-group">
                    <input v-model="formData.lastName" id="lastName" type="text" class="form-input"
                        placeholder="Last Name" :class="{ error: validationErrors.lastName }" />
                </div>
                <span v-if="validationErrors.lastName" class="error-message">{{ validationErrors.lastName }}</span>

                <!-- Email -->
                <div class="form-group">
                    <input v-model="formData.email" id="email" type="email" class="form-input" placeholder="Email"
                        :class="{ error: validationErrors.email }" />
                </div>
                <span v-if="validationErrors.email" class="error-message">{{ validationErrors.email }}</span>


                <!-- Date of Birth -->
                <div class="form-group">
                    <input v-model="formData.dateOfBirth" id="dateOfBirth" type="date" class="form-input"
                        placeholder="Date of Birth" :class="{ error: validationErrors.dateOfBirth }" />
                </div>

                <!-- Country ID -->
                <div class="form-group">
                    <input v-model="formData.country_id" id="country_id" type="text" class="form-input"
                        placeholder="Country" :class="{ error: validationErrors.country_id }" />
                </div>

                <!-- Password -->
                <div class="form-group">
                    <input v-model="formData.password" id="password" type="password" class="form-input"
                        placeholder="Password" :class="{ error: validationErrors.password }" />
                </div>
                <span v-if="validationErrors.password" class="error-message">{{ validationErrors.password }}</span>


                <!-- Submit Button -->
                <div class="form-group">
                    <button type="submit" class="btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>
