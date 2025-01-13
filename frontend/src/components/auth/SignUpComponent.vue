<template>
    <div class="auth-login">
        <form>
            <div class="auth-email">
                <input class="form-input" placeholder="email" type="text" />
            </div>
            <div class="auth-password">
                <input class="form-input" placeholder="password" type="password" />
                <span class="password-icon" id="eye-icon">
                    <font-awesome-icon :icon="['fab', 'eye']" class="eye-icon" />
                </span>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../../assets/main.css'
</script>