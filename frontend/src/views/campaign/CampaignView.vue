<template>
    <NavbarComponent></NavbarComponent>
    <section class="campaign-section container">
        <div class="row">
            <div class="col-sm-12 col-md-6">
                <div class="campaign-video">
                    <iframe width="420" height="315" src="https://youtu.be/idgnF5UqT8Y"></iframe>
                </div>
            </div>
            <div class="col-sm-12 col-md-6">
                <div class="horizontal-line"></div>
                <div class="campaign-target">
                    <p class="amount"><span class="currency"></span></p>
                    <p class="pledge-text">pledged of <span class="currency"></span> goal</p>
                </div>
                <div class="backers">
                    <p class="bakcers-number"></p>
                    <p class="backers-text">backers</p>
                </div>
                <div class="campaign-days">
                    <p class="days-num"></p>
                    <p class="days-text">days to go</p>
                </div>
                <div class="backer-button">
                    <button class="btn-primary">Back this project</button>
                </div>
                <div class="row">
                    <div class="col-sm-6 col-md-6">
                        <button class="btn-reminder"><span class="reminder-icon"><font-awesome-icon
                                    :icon="['far', 'bookmark']" /></span>Remind me</button>
                    </div>
                    <div class="col-sm-6 col-md-6">
                        <ul class="social-media-list">
                            <li>FB</li>
                            <li>TW</li>
                            <li>SN</li>
                        </ul>
                    </div>
                </div>
                <div class="campaign-policy">
                    <p>All or nothing. This project will only be funded if it reaches its goals by Thur, August 15, 2024
                        7:00PM UTC +03:00.</p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import '@/assets/main.css';
</script>