<template>
  <NavbarComponent></NavbarComponent>
  <section class="content-section">
    <div class="basics">
      <h1>Basics</h1>
      <p>
        Make a good first impression: introduce your campaign objectives and
        entice people to learn more. This basic information will represent your
        campaign on your page, cards and in searches.
      </p>
    </div>
  </section>
  <form>
    <div class="campaign-title">
      <h2>Campaign Title</h2>
      <div>
        <p>What is the title of your campaign?</p>
      </div>
      <div>
        <input placeholder="campaign name" type="text" />
      </div>
    </div>
    <div class="campaign-tagline">
      <h2>Campaign Tagline</h2>
      <div>
        <p>
          Provide a short description that best describes your campaign to your
          audience
        </p>
      </div>
      <div>
        <textarea placeholder="enter campaign tagline :)" rows="2"></textarea>
      </div>
    </div>
    <div class="campaign-card">
      <h2>Campaign Card Image</h2>
      <div>
        <p>Upload a square image that represents your campaign</p>
        <p>1080 * 1080 recommended resolution. 220 * 220 minimum resolution.</p>
      </div>
      <div>
        <input
          type="file"
          class="card-upload"
          name="campaign-card-image-upload"
        />
      </div>
    </div>
    <div class="campaign-video">
      <h2>Pitch Video or Image</h2>
      <div>
        <p>
          Make a good first impression: introduce your campaign objectives and
          entice people to learn more. This basic information will represent
          your campaign on your page, cards and in searches.
        </p>
      </div>
      <div>
        <input type="text" placeholder="paste video link" />
      </div>
    </div>
    <div class="campaign-location">
      <h2>Location</h2>
      <div>
        <p>
          Choose the location where you are running the campaign. This location
          will be visible on your campaign page for your audience to see.
        </p>
      </div>
      <div>
        <select>
          <option>Kenya</option>
          <option>Uganda</option>
        </select>
      </div>
    </div>
    <div class="campaign-category">
      <h2>Category</h2>
      <div>
        <p>
          To help backers find your campaign. Select a category that best
          represents your project
        </p>
      </div>
      <div>
        <select>
          <option>sdfgh</option>
          <option>oiuytr</option>
        </select>
      </div>
    </div>
    <div class="campaign-tags">
      <h2>Tags</h2>
      <div>
        <p>
          Enter up to five keywords that best describe your campaign. These tags
          will help with organization and discoverability.
        </p>
      </div>
      <div>
        <textarea
          placeholder="...project, hiking-gear, assistance,"
          rows="1"
        ></textarea>
      </div>
    </div>

    <div class="campaign-duration">
      <h2>Campaign Duration</h2>
      <div>
        <p>Enter the duration of your campaign in days</p>
      </div>
      <div>
        <input type="number" placeholder="16, 18, 20, 79" />
      </div>
    </div>

    <div class="horizontal-line"></div>
    <div class="next row">
      <div class="col-xs-12">
        <button class="btn-next">Create</button>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import NavbarComponent from '../NavbarComponent.vue';
</script>
<style scoped>
.horizontal-line {
  background-color: #ccd1d1;
  width: 100%;
  height: 1px;
  line-height: 80%;
}

.next {
  width: 100%;
  flex-wrap: wrap;
  margin: 30px 10px 20px 0px;
}

.next > div {
  display: flex;
  justify-content: flex-end;
  /* Aligns content to the right */
}
</style>
