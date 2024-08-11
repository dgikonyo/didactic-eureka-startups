<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <section class="hero-section">
    <div class="left-hero">
      <button class="btn btn-login">Login</button>
      <button class="btn btn-sign-up">Sign Up</button>
    </div>

    <div class="right-hero">
      <div class="title">
        <p class="title-text">konnect</p>
      </div>

      <div class="catchphrase">
        <div class="phrase">
          <p>Create.</p>
        </div>
        <div class="phrase">
          <p>Ideas.</p>
        </div>
        <div class="phrase">
          <p>Backers.</p>
        </div>
        <div class="phrase">
          <p>Advertise.</p>
        </div>
      </div>

      <div class="pointers">
        <ul>
          <li>
            Crowdfunding platform for creatives, influencers and entrepreneurs
          </li>
          <li>Support/Funding Initiatives</li>
          <li>Global Impact</li>
        </ul>
      </div>

      <div class="cta">
        <button class="btn campaign-button">Start a Campaign</button>
        <button class="btn">Explore Projects</button>
      </div>

      <div class="partners">
        <p>Collaborate with our partners</p>
      </div>
    </div>
  </section>
  <section class="campaigns-section">
    <!-- verified projects -->
    <div class="verified-projects">
      <div class="section-description">
        <p class="page-text">
          We help local <span class="span-translucent">entrepreneurs</span> and
          <span class="span-blue">organizations</span> raise funds for projects
        </p>
      </div>
      <div class="projects">
        <div class="project-card">
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>

    </div>
    <!-- projects near you -->
    <div class="location-projects"></div>
  </section>
</template>

<style scoped></style>
