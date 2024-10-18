<script setup lang="ts"></script>
<template>
	<section class="hero-section">
    <div class="hero-container-row">

        <div class="left-hero">
          <button class="btn btn-login">Login</button>
          <button class="btn2 btn-sign-up">Sign Up</button>
        </div>

      <div class="right-hero">  

        <div class="title col-12"><p class="title-text">Konnect</p></div>

        <div class="catchphrase">
            <div class="phrase"><p class="point">Create.</p></div>
            <div class="phrase"><p class="point">Ideas.</p></div>
        </div>

        <div class="catchphrase2">
            <div class="phrase"><p class="point">Backers.</p></div>
            <div class="phrase"><p class="point">Advertise.</p></div>
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
          <RouterLink to="/campaign/questions" class="btn-start col-sm-12 col-md-12 col-lg-6">Start a Campaign</RouterLink>
          <button class="btn-explore col-sm-12 col-md-12 col-lg-6">Explore Projects</button>
        </div>

        <div class="partners">
          <p>Collaborate with our partners</p>
        </div>

      </div>
    </div>
  </section>

  <section class="campaign-cards">
    <div class="campaign-section">
      <!-- verified projects -->
        <div class="section-description row">
          <p class="page-text col-8">
            We help local <span class="span-border">entrepreneurs</span> and
            <span class="span-blue">organizations</span> raise funds for <span class="span-border">projects</span>
          </p>
          <a class="col-4">View All</a>
        </div>

          <div class="project-cards">
            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>

            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>

            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="...">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>
          </div>
        </div>

    <div class="campaign-section2">
      <!-- projects near you -->
      <div class="section-description row">
          <p class="page-text col-8">
            <span class="span-blue">Investing</span> in a promising new venture.
          </p>
          <a class="col-4">View All</a>
        </div>

          <div class="project-cards">
            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="Bathing stones">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>

            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="Bathing stones">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>

            <div class="card">
              <div class="pic-space">
              <img src="./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png" class="card-img-top" alt="Bathing stones">
              </div>
              <div class="card-body">
                <h5 class="category">HEALTH 4 U</h5>
                <p class="card-text">Spa stones: That absorb water and clean themselves</p>
                <p class="card-text">Starting Price: <span class="price"> $15</span></p>
              </div>
            </div>
          </div>
        </div>
  </section>

  <section class="trending">
    <div class="trending-section">
      <!-- verified projects -->
        <div class="section-description">
          <div class="desc"><p class="page-text">Trending right now</p></div>
          <div class="desc2"><p class="link-text"><a class="link">View All</a></p></div>
        </div>

          <div class="trending-row">

            <div class="trending-card">
              <div class="trending-body">
                <p class="back">Writing</p>
                <p class="card-text">How Romance Author, Penny Reid, 20X her funding goal with the help of Audiobooks</p>
                <button class="back">Read more</button>
              </div>
            </div>

            <div class="trending-card">
              <div class="trending-body">
                <p class="back">Writing</p>
                <p class="card-text">How Romance Author, Penny Reid, 20X her funding goal with the help of Audiobooks</p>
                <button class="back">Read more</button>
              </div>
            </div>

            <div class="trending-card">
              <div class="trending-body">
                <p class="back">Writing</p>
                <p class="card-text">How Romance Author, Penny Reid, 20X her funding goal with the help of Audiobooks</p>
                <button class="back">Read more</button>
              </div>
            </div>

          </div>
        </div>
  </section>
  <section class="footer">
    <Footer class="end"></Footer>
  </section>
</template>
<style scoped>
  template{
    height: 100%;
    width: 100%;
    margin: 0;
    background-color: brown;
  }

  .hero-section{
    background-image:url("./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png");
    width: 100%;
    height: 70%;
    background-color: #E40066;
    margin: 0%;
  }

  .hero-container-row{
    display: flex;
    flex-direction: row;
    padding: 0px 30px;
  }

  .left-hero{
    margin: 10px 10px;
    flex: 40%;
    flex-direction: row;
    justify-content: space-around;
  }

  .right-hero{
    margin: 10px;
    padding: 20px 40px;
    border-radius: 20px;
    background-color: white;
    flex: 60%;
  }

  .btn{
    background-color: hsla(333, 100%, 45%, 1);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 30px;
    margin: 5px 20px;
  }

  .btn-start{
    background-color: hsla(333, 100%, 45%, 1);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 30px;
  }

  .btn2 {
    background-color: hsla(0, 0%, 100%, 0.3);
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: black;
    border-radius: 8px;
    padding: 6px 30px;
    margin: 5px 20px;
    border: black, 0.8px, solid;
  }
  .btn-explore{
    background-color: hsla(0, 0%, 100%, 0.3);
    border: white, 1px, solid;
    font-size: 18px;
    font-family: "Inter", sans-serif;
    color: black;
    border-radius: 8px;
    padding: 6px 30px;
  }

  .title-text{
    color: #261447;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 26px;
  }

  .catchphrase{
    display: flex;
    flex-direction: row;
  }

  .catchphrase2{
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .catchphrase > div{
    border: black, 0.8px, solid;
    font-family: "Inter", sans-serif;
    border-radius: 25px;
    margin: 10px 15px 10px 0px;
  }

  .catchphrase2 > div{
    border: black, 0.8px, solid;
    font-family: "Inter", sans-serif;
    border-radius: 25px;
    margin: 10px 15px 10px 0px;
  }

  p.point {
    margin: 10px;
    text-align: center;
    font-size: 28px;
    color: black;
  }

  .pointers{
    margin-top: 20px;
  }

  ul{
    font-size: 20px;
    color: #151515;
  }

  .cta{
    margin: 30px 0px 40px 0px;
    display: flex;
    flex-direction: row;
  }

  .span-border{
    border: #8BD7D2, 0.6px, solid;
    border-radius: 15px;
    padding: 2px 6px;
  }

  .span-blue{
    background-color: #8BD7D2;
    border: none;
    border-radius: 15px;
    padding: 2px 6px;
  }

  .section-description{
    display: flex;
    flex-direction: row;
  }
  .desc{
    flex: 70%;
    font-weight: 500;
    font-size: 22px;
  }
  .desc2{
    flex: 30%;
    text-align: right;
    padding-right: 20px;
    font-size: 16px;
  }
  .section-description p{
    margin: 15px 0px;
    font-size: 28px;
    color: #261447;
  }
  .section-description a{
    font-size: 24px;
    color: #261447;
  }

  .campaign-section, .campaign-section2{
    margin: 20px 0px;
  }

  .project-cards{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
  .card{
    max-width: 380px;
    border: black, 1.5px, solid;
    border-radius: 15px;
  }
  .card-img-top{
    object-fit: cover;
    border-radius: 10px;
  }
  .pic-space {
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

  .trending-row{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .trending-card{
    background-image:url("./assets/Images/deniz-altindas-t1XLQvDqt_4-unsplash 1 (2).png");
    object-fit: contain;
    max-width: 400px;
    border: none;
    height: 550px;
    padding: 15px;
    border-radius: 15px, 0px, 15px, 0px;
    }

  .back{
    background-color: hsla(0, 0%, 100%, 0.63);
    color: black;
    font-size: 18px;
    font-weight: 400;
    border: none;
    border-radius: 12px;
    width: fit-content;
    padding: 5px 10px;
    }

  .card text{
    font-size: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
  }

  .trending-section{
    margin: 10px 0px 30px 0px;
  }
  .footer{
    background-color: #EBB9DF;
  }
  .end{
    padding: 20px 40px;
  }
</style>