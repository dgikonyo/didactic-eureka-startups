<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/FooterComponent.vue';
import CardComponent from './components/CardComponent.vue';
</script>

<template>
<header>
    <button>Log In</button>
    <button>Sign Up</button>
    <h1>Konnect</h1>
    <button>Explore Projects</button>
</header>

<section class="first">
    <div>
        <p>Every Journey starts with a step.</p>
        <p>Take the leap.</p>
        <button>Create a campaign</button>
    </div>
</section>

<section class="second">
    <div>
        <div><img src="./components/icons/heroImage.png"></div>
        <div>
            <div><img src="./components/icons/heroImage.png"></div>
            <div><img src="./components/icons/heroImage.png"></div>
        </div>
        <button>Create a campaign</button>
    </div>
</section>

</template>

<style>
</style>