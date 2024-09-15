<script setup lang="ts"></script>
<template>
    <section class="navbar">
        <div class="buttons">
            <button class="btn btn-login">Login</button>
            <button class="btn2 btn-sign-up">Sign Up</button>
        </div>
        <div class="title">Konnect</div>

        <div class="explore">
            <button>Explore Projects <span>-></span></button>
        </div>
    </section>
</template>
<style scoped>
.btn-login {
    background-color: hsla(333, 100%, 45%, 1);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 30px;
    margin: 5px 20px;
}

.btn-sign-up {
    background-color: hsla(0, 0%, 100%, 0.3);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: black;
    border-radius: 8px;
    padding: 6px 30px;
    margin: 5px 20px;
    border: black, 0.8px, solid;
}
</style>