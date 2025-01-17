<script setup lang="ts">
import { RouterLink } from 'vue-router';
import '../assets/main.css';

if (window.location.href === '/') {
    document.getElementById('nav-explore').style.display = 'none';
}
</script>
<template>
    <section class="navbar-section">
        <div class="navigation-bar">
            <div class="container">
                <div class="nav-items row">
                    <div class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <RouterLink class="btn btn-login" to="/sign-in">Login</RouterLink>
                        </div>
                        <div class="col-sm-6 col-md-4 col-lg-4">
                            <RouterLink class="btn btn-sign-up" to="/sign-up">Sign Up</RouterLink>
                        </div>
                    </div>
                    <div class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <RouterLink to='/' class="title">Konnect</RouterLink>
                    </div>
                    <div id='nav-explore' class="nav-item col-sm-12 col-md-4 col-lg-4">
                        <RouterLink class="explore" to="/campaigns/questions">Explore Projects <span> <font-awesome-icon
                                    :icon="['fas', 'arrow-right']" size="xs" class="explore-icon" /></span></RouterLink>
                    </div>
                </div>
            </div>
            <div class="nav-line"></div>
        </div>
    </section>
</template>
