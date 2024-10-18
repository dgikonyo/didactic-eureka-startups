<script setup lang="ts"></script>
<template>
  <div class="card">
      <div class="pic-space">
        <img src="./icons/heroImage.png" class="card-img-top" alt="image of campaign"/>
      </div>
      <div class="card-body">
          <h5 class="category">HEALTH 4 U</h5>
          <p class="card-text">Spa stones: That absorb water and clean themselves</p>
          <p class="card-text">Starting Price: <span class="price"> $15</span></p>
      </div>
  </div>
</template>

<style scoped>
.card{
  max-width: 380px;
  border: black, 1.5px, solid;
  border-radius: 15px;
}

.card-img-top{
  object-fit: cover;
  border-radius: 10px;
}

.pic-space{
  padding: 20px 15px;
}

h5.category{
  color:#888888;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
p.card-text{
  color: #261447;
  font-family: "Roboto", sans-serif;
  font-size: 22px;
}
</style>