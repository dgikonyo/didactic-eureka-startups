<template>
  <NavbarComponent></NavbarComponent>
  <section class="content-section">
    <div class="campaign-info">
      <h2 class="campaign-info-title">Basics</h2>
      <p class="campaign-info-expl">
        Make a good first impression: introduce your campaign objectives and
        entice people to learn more. This basic information will represent your
        campaign on your page, cards and in searches.
      </p>
    </div>

    <form>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Campaign Title</h2>
        <div>
          <p class="campaign-info-expl">What is the title of your campaign?</p>
        </div>
        <div class="campaign-info-input">
          <input placeholder="Campaign Title" type="text" />
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Campaign Tagline</h2>
        <div>
          <p class="campaign-info-expl">
            Provide a short description that best describes your campaign to
            your audience
          </p>
        </div>
        <div class="campaign-info-input">
          <textarea placeholder="Enter Campaign Tagline :-)" rows="2" cols="80"></textarea>
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Campaign Card Image</h2>
        <div>
          <p class="campaign-info-expl">
            Upload a square image that represents your campaign
          </p>
          <p class="campaign-info-expl">
            1080 * 1080 recommended resolution. 220 * 220 minimum resolution.
          </p>
        </div>
        <div class="campaign-info-input">
          <input type="file" class="card-upload" name="campaign-card-image-upload" />
          <label for="file">Select file</label>
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Pitch Video or Image</h2>
        <div>
          <p class="campaign-info-expl">
            Make a good first impression: introduce your campaign objectives and
            entice people to learn more. This basic information will represent
            your campaign on your page, cards and in searches.
          </p>
        </div>
        <div class="campaign-info-input">
          <input type="text" placeholder="Paste Video Link" />
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Location</h2>
        <div>
          <p class="campaign-info-expl">
            Choose the location where you are running the campaign. This
            location will be visible on your campaign page for your audience to
            see.
          </p>
        </div>
        <div class="campaign-info-input">
          <select>
            <option>Kenya</option>
            <option>Uganda</option>
          </select>
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Category</h2>
        <div>
          <p class="campaign-info-expl">
            To help backers find your campaign. Select a category that best
            represents your project
          </p>
        </div>
        <div class="campaign-info-input">
          <select>
            <option>sdfgh</option>
            <option>oiuytr</option>
          </select>
        </div>
      </div>
      <div class="campaign-info">
        <h2 class="campaign-info-title">Tags</h2>
        <div>
          <p class="campaign-info-expl">
            Enter up to five keywords that best describe your campaign. These
            tags will help with organization and discoverability.
          </p>
        </div>
        <div class="campaign-info-input">
          <textarea placeholder="...project, hiking-gear, assistance," rows="2" cols="80"></textarea>
        </div>
      </div>

      <div class="campaign-info">
        <h2 class="campaign-info-title">Campaign Duration</h2>
        <div>
          <p class="campaign-info-expl">
            Enter the duration of your campaign in days
          </p>
        </div>
        <div class="campaign-info-input">
          <input type="number" placeholder="16, 18, 20, 79 ...." />
        </div>
      </div>

      <div class="horizontal-line"></div>
      <div class="next row">
        <div class="col-xs-12">
          <button class="btn-secondary">Create</button>
        </div>
      </div>
    </form>
  </section>
</template>
<script setup lang="ts">
import NavbarComponent from '../NavbarComponent.vue';
import '../../assets/main.css';
</script>
