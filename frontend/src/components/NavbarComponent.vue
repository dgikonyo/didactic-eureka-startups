<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <section class="navbar-section">
        <div class="navigation-bar">
            <div class="container">
                <div class="nav-items row">
                    <div class="button-div col-sm-12 col-md-3 col-lg-3">
                        <button class="btn btn-login col-sm-6 col-md col-lg">Login</button>
                        <button class="btn btn-sign-up col-sm-6 col-md col-lg">Sign Up</button>
                    </div>
                    <div class="title-div col-sm-12 col-md-3 col-lg-3">
                        <p class="title">Konnect</p>
                    </div>
                    <div class="explore-div col-sm-12 col-md-3 col-lg-3">
                        <RouterLink class="explore" to="/campaign/start/questions">Explore Projects <span> <font-awesome-icon :icon="['fas', 'right-long']" /></span></RouterLink>
                    </div>
                </div>
            </div> 
        </div>
    </section>
</template>
<style scoped>
    .navigation-bar {
        display: flex;
        justify-content: space-between;
        align-content: center;
        flex-wrap: nowrap;
        width: 100%;    
    }

    .btn {
        font-size: 18px;
        font-family: 'Inter', sans-serif;
        border-radius: 8px;
        padding: 5px 10px;
        margin-right: 5px;
    }

    .btn-login {
        background-color: hsla(333, 100%, 45%, 1);
        color: white;
        border: none;
    }

    .btn-sign-up {
        background-color: hsla(0, 0%, 100%, 0.3);
        font-size: 18px;
        font-family: 'Inter', sans-serif;
        color: black;
        border: black, 0.8px, solid;
    }
</style>
