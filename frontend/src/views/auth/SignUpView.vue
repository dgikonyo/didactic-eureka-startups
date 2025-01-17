<script lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import '../../assets/main.css'
import type { User } from '@/types/User';

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
                    
                } catch (error) { }
            }

        }

        return {
            formData,
            validationErrors,
            handleSubmit
        }
    }
}

</script>
<template>
    <section class="user-form">
        <div class="form-container">
            <h2>User Information</h2>
            <form @submit.prevent="handleSubmit" class="form">
                <!-- Username -->
                <div class="form-group">
                    <label for="username">Username</label>
                    <input v-model="formData.username" id="username" type="text" class="form-input"
                        :class="{ error: validationErrors.username }" />
                    <span v-if="validationErrors.username" class="error-message">{{ validationErrors.username }}</span>
                </div>

                <!-- First Name -->
                <div class="form-group">
                    <label for="firstName">First Name</label>
                    <input v-model="formData.firstName" id="firstName" type="text" class="form-input"
                        :class="{ error: validationErrors.firstName }" />
                    <span v-if="validationErrors.firstName" class="error-message">{{ validationErrors.firstName
                        }}</span>
                </div>

                <!-- Last Name -->
                <div class="form-group">
                    <label for="lastName">Last Name</label>
                    <input v-model="formData.lastName" id="lastName" type="text" class="form-input"
                        :class="{ error: validationErrors.lastName }" />
                    <span v-if="validationErrors.lastName" class="error-message">{{ validationErrors.lastName }}</span>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email">Email</label>
                    <input v-model="formData.email" id="email" type="email" class="form-input"
                        :class="{ error: validationErrors.email }" />
                    <span v-if="validationErrors.email" class="error-message">{{ validationErrors.email }}</span>
                </div>

                <!-- Date of Birth -->
                <div class="form-group">
                    <label for="dateOfBirth">Date of Birth</label>
                    <input v-model="formData.dateOfBirth" id="dateOfBirth" type="date" class="form-input"
                        :class="{ error: validationErrors.dateOfBirth }" />
                </div>

                <!-- Country ID -->
                <div class="form-group">
                    <label for="country_id">Country ID</label>
                    <input v-model="formData.country_id" id="country_id" type="number" class="form-input"
                        :class="{ error: validationErrors.country_id }" />
                </div>

                <!-- Password -->
                <div class="form-group">
                    <label for="password">Password</label>
                    <input v-model="formData.password" id="password" type="password" class="form-input"
                        :class="{ error: validationErrors.password }" />
                    <span v-if="validationErrors.password" class="error-message">{{ validationErrors.password }}</span>
                </div>

                <!-- Submit Button -->
                <div class="form-group">
                    <button type="submit" class="btn-submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>
