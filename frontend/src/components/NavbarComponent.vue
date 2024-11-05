<template>
    <section class="navbar-section">
        <div class="navigation-bar">
            <div class="container">
                <div class="nav-items row">
                    <div class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <button class="btn btn-login">Login</button>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <button class="btn btn-sign-up">Sign Up</button>
                        </div>
                    </div>
                    <div class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <RouterLink to='/' class="title">Konnect</RouterLink>
                    </div>
                    <div class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <RouterLink class="explore" to="/campaigns/questions">Explore Projects <span> <font-awesome-icon
                                    :icon="['fas', 'arrow-right']" size="xs" class="explore-icon" /></span></RouterLink>
                    </div>
                </div>
            </div>
            <div class="nav-line"></div>
        </div>
    </section>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../assets/main.css';
</script>
