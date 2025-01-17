<script setup lang="ts">
import Footer from '@/components/FooterComponent.vue';
import Navbar from '@/components/NavbarComponent.vue'
import '@/assets/main.css'

import imgrl from '@/assets/Images/deniz-altindas-t1XLQvDqt.png'
</script>
<template>
  <section class="navigation-section">
    <Navbar />
  </section>
  <section class="home-section">
    <div class="hero-section">
      <div class="hero-container-row">
        <div class="left-hero">
        </div>

        <div class="right-hero">
          <div class="catchphrase">
            <div class="phrase">
              <p class="point">Create.</p>
            </div>
            <div class="phrase">
              <p class="point">Ideas.</p>
            </div>
          </div>

          <div class="catchphrase2">
            <div class="phrase">
              <p class="point">Backers.</p>
            </div>
            <div class="phrase">
              <p class="point">Advertise.</p>
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
            <RouterLink to="/campaigns/questions" class="btn-primary col-sm-12 col-md-12 col-lg-6">Start a Campaign
            </RouterLink>
            <button class="btn-explore col-sm-12 col-md-12 col-lg-6">
              Explore Projects
            </button>
          </div>

          <div class="partners">
            <p>Collaborate with our partners</p>
          </div>
        </div>
      </div>
    </div>

    <div class="campaign-cards-section">
      <div class="campaign-section">
        <!-- verified projects -->
        <div class="section-description row">
          <p class="page-text col-sm-12 col-md-8 col-lg-8">
            We help local <span class="span-border">entrepreneurs</span> and
            <span class="span-blue">organizations</span> raise funds for
            <span class="span-border">projects</span>
          </p>
          <a class="col-sm-12 col-md-4 col-lg-4">View All</a>
        </div>

        <div class="project-cards row">
          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>

          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>

          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="campaign-section">
        <!-- projects near you -->
        <div class="section-description row">
          <p class="page-text col-sm-12 col-md-8 col-lg-8">
            <span class="span-blue">Investing</span> in a promising new venture.
          </p>
          <a class="col-sm-12 col-md-4 col-lg-4">View All</a>
        </div>

        <div class="project-cards row">
          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="Bathing stones" />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>

          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="Bathing stones" />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>

          <div class="card col-sm-12 col-md-4 col-lg-4">
            <div class="pic-space">
              <img :src="imgrl" class="card-img-top" alt="Bathing stones" />
            </div>
            <div class="card-body">
              <h5 class="category">HEALTH 4 U</h5>
              <p class="card-text">
                Spa stones: That absorb water and clean themselves
              </p>
              <p class="card-text">
                Starting Price: <span class="price"> $15</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="trending-section">
      <!-- verified projects -->
      <div class="section-description row">
        <p class="page-text col-sm-12 col-md-8 col-lg-8">Trending right now</p>
        <p class="link-text col-sm-12 col-md-4 col-lg-4"><a class="link">View All</a></p>
      </div>

      <div class="trending-row row">
        <div class="trending-card col-sm-12 col-md-4 col-lg-4">
          <div class="trending-body">
            <p class="back">Writing</p>
            <p class="card-text">
              How Romance Author, Penny Reid, 20X her funding goal with the help
              of Audiobooks
            </p>
            <button class="back">Read more</button>
          </div>
        </div>

        <div class="trending-card col-sm-12 col-md-4 col-lg-4">
          <div class="trending-body">
            <p class="back">Writing</p>
            <p class="card-text">
              How Romance Author, Penny Reid, 20X her funding goal with the help
              of Audiobooks
            </p>
            <button class="back">Read more</button>
          </div>
        </div>

        <div class="trending-card col-sm-12 col-md-4 col-lg-4">
          <div class="trending-body">
            <p class="back">Writing</p>
            <p class="card-text">
              How Romance Author, Penny Reid, 20X her funding goal with the help
              of Audiobooks
            </p>
            <button class="back">Read more</button>
          </div>
        </div>
      </div>

    </div>
    <div class="footer">
      <Footer class="end"></Footer>
    </div>
  </section>
</template>