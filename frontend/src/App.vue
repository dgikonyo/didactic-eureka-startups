<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/FooterComponent.vue'
</script>

<template>
  <section class="hero-section container">
    <div class="row">
      <div class="left-hero col-sm-12 col-md-12 col-lg-4">
        <div class="row">
          <button class="btn btn-login col-3">Login</button>
          <button class="btn btn-sign-up col-3">Sign Up</button>
        </div>
      </div>
      <div class="right-hero col">
        <div class="title col-12">
          <p class="title-text">konnect</p>
        </div>

        <div class="catchphrase">
          <div class="row">
            <div class="phrase col-3">
              <p>Create.</p>
            </div>
            <div class="phrase col-3">
              <p>Ideas.</p>
            </div>
          </div>

          <div class="row">
            <div class="phrase col-3">
              <p>Backers.</p>
            </div>
            <div class="phrase col-3">
              <p>Advertise.</p>
            </div>
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

        <div class="cta row">
          <button class="btn campaign-button col-sm-12 col-md-12 col-lg-6">Start a Campaign</button>
          <button class="btn col-sm-12 col-md-12 col-lg-6">Explore Projects</button>
        </div>

        <div class="partners">
          <p>Collaborate with our partners</p>
        </div>
      </div>
    </div>
  </section>
  <section class="campaigns-section">
    <!-- verified projects -->
    <div class="verified-projects">
      <div class="section-description row">
        <p class="page-text col-8">
          We help local <span class="span-translucent">entrepreneurs</span> and
          <span class="span-blue">organizations</span> raise funds for projects
        </p>
        <a class="col-4">View All</a>
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
  <section class="footer">
    <Footer></Footer>
  </section>
</template>

<style scoped></style>
