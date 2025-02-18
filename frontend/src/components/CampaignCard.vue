<script lang="ts">
import '../assets/main.css';
	/*
load the card with campaign information
	*/

export default {
	name:'CampaignCard'
};
</script>
<template>
    <div class="card col-sm-12 col-md-4 col-lg-4">
        <div class="pic-space">
            <img :src="imgrl" class="card-img-top" alt="..." />
        </div>
        <div class="card-body">
            <h5 class="category">Some details</h5>
            <p class="card-text">
               some text
            </p>
            <p class="card-text">Campaign target <span class="price">some amount</span></p>
        </div>
        <div class="campaign-button">
        	<button class="btn-campaign">Click</button>
        </div>
    </div>
</template>