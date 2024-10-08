<script setup lang="ts">
    import { RouterLink, RouterView } from 'vue-router';
</script>
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
                        <RouterLink class="explore" to="/campaign/start/questions">Explore Projects <span> <font-awesome-icon :icon="['fas', 'arrow-right']" size="xs" class="explore-icon" /></span></RouterLink>
                    </div>
                </div>
            </div> 
            <div class="nav-line"></div>
        </div>
    </section>
</template>
<style scoped>
    .navigation-bar {
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        margin-bottom: 20px;
    }
    .nav-items {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .nav-item {
        display: flex;
        justify-content: center;
    }

    a {
        text-decoration: none;
    }

    .btn {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        border-radius: 8px;
        padding: 5px 5px;
        margin-right:10px;
        width: 100px;
    }

    .btn-login {
        background-color: hsla(333, 100%, 45%, 1);
        color: white;
        border: none;
    }

    .btn-sign-up {
        background-color: hsla(0, 0%, 100%, 0.3);
        color: black;
        border: black, 0.8px, solid;
    }

    .title {
        font-size: 30px;
        color:black;
        font-weight: 500;
    }

    .explore {
        font-size: 20px;
        color:black;
        font-weight: 500;
    }

    .explore-icon {
        margin:0 5px 0 5px;
    }
</style>
