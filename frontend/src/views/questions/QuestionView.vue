<script lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import '@/assets/main.css';
import { useRouter } from 'vue-router';
import { ref, type ComponentInternalInstance, onMounted, computed } from 'vue';
import type { Campaign } from '@/types/Campaign';
import { businessCategories, businessSubCategories, country } from '@/data/menu_data';
import { useAuthStore, useCampaignStore } from '@/stores';

export default {
  name: 'CampaignContent',
  components: {
    NavbarComponent,
  },
  setup() {
    const authStore = useAuthStore();
    const campaignStore = useCampaignStore();
    const router = useRouter();

    const question = ref(1);
    const countries = country;
    const campaign = ref<Campaign>({
      category: '',
      sub_category: '',
      country: '',
      currency: '',
      title: '',
      tagLine: '',
      cardImage: '',
      location: '',
      tags: '',
      startDate: '',
      endDate: '',
      duration: 0,
      targetAmount: 0,
      videoUrl: '',
      videoOverlayUrl: '',
      story: '',
      supportEmail: '',
      fundingModel: '',
      user_id: '',
      campaignStatus: '',
      countryId: 0,
    });

    const isStepValid = computed(() => {
      switch (step.value) {
        case 1: return campaign.value.category && campaign.value.sub_category;
        case 2: return campaign.value.country;
        case 3: return campaign.value.currency;
        default: return true;
      }
    });

    function validateCurrentStep() {
      if (!isStepValid.value) {
        alert(`Please fill in all required fields for Step ${step.value}.`);
        return false;
      }
      return true;
    }

    // Methods for navigating between questions
    function nextStep() {
      if (step.value <= 4 && validateCurrentStep()) {
        step.value++;
      }
    }

    // save to store, redirect to questions page
    async function registerCampaignHandler(campaign: Campaign) {
      try {
        await campaignStore.createCampaign(campaign);
        router.push('/campaigns');
      } catch (error) {
        console.error('Error creating campaign:', error);
      }
    }

    async function handleFileUploadEvent(event: Event) {
      const fileInput = event.target as HTMLInputElement;
      if (fileInput && fileInput.files) {
        const file = fileInput.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            campaign.value.cardImage = reader.result as string;
          };
          reader.readAsDataURL(file);
        }
      }
    }

    const calculateDuration = (startDate: Date, endDate: Date) => {
      const oneDay: number = 24 * 60 * 60 * 1000;
      const diffDays: number = Math.floor(
        Math.abs(startDate.getTime() - endDate.getTime()) / oneDay
      );

      return diffDays;
    };

    function isAuthenticated() {
      return authStore.isLoggedIn;
    }

    onMounted(() => {
      if (!isAuthenticated.value) {
        router.push('/sign-in');
      }
    });

    return {
      businessCategories,
      businessSubCategories,
      question,
      countries,
      campaign,
      nextStep,
      registerCampaignHandler,
      isAuthenticated,
    };
  },};
</script>
<template>
  <!-- https://codepen.io/thomasMM/pen/jOWxOpV?editors=1000 -->
  <NavbarComponent></NavbarComponent>
  <section class="questions-section">
    <div class="question-stepper">
      <div
        class="question"
        :class="{
          'question-active': question === 1,
          'question-done': question > 1,
        }"
      >
        1
      </div>
      <div
        class="question"
        :class="{
          'question-active': question === 2,
          'question-done': question > 2,
        }"
      >
        2
      </div>
      <div
        class="question"
        :class="{
          'question-active': question === 3,
          'question-done': question > 3,
        }"
      >
        3
      </div>
      <div
        class="question"
        :class="{
          'question-active': question === 4,
          'question-done': question > 4,
        }"
      >
        4
      </div>
    </div>
    <transition name="slide-fade">
      <div class="question-1 container" v-show="question === 1">
        <form class="form" method="post" action="#" @submit.prevent="nextStep()">
          <div class="question-body">
            <div class="question-header row">
              <div class="col-12">
                <h2 class="question-text">
                  Select a primary category and subcategory for your new
                  project.
                </h2>
              </div>
              <div class="col-12">
                <p class="question-guide">
                  These will help backers find your project, and you can change
                  them later if you need to.
                </p>
              </div>
            </div>
            <div class="categories row">
              <div class="main-category col-xs-12 col-md-6 col-lg-6">
                <div class="col-12">
                  <p>Category</p>
                </div>

                <div class="col-12">
                  <select
                    class="category-choices"
                    placeholder="Select"
                    v-model="campaign.category"
                  >
                    <option disabled value="">Please select one</option>
                    <option
                      value="choice"
                      v-for="category in businessCategories"
                      :key="category"
                    >
                      {{ category }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="sub-category col-xs-12 col-md-6 col-lg-6">
                <div class="col-12">
                  <p>Sub Category</p>
                </div>
                <div class="col-12">
                  <select
                    class="category-choices"
                    placeholder="Select"
                    v-model="campaign.sub_category"
                  >
                    <option disabled value="">Please select one</option>
                    <option
                      value="choice"
                      v-for="subCategory in businessSubCategories"
                      :key="subCategory"
                    >
                      {{ subCategory }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal-line"></div>
          <div class="next row">
            <div class="col-xs-12">
              <button class="btn-secondary" id="btn-location">
                Next: Location
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="question-2 container" v-show="question === 2">
        <form class="form" method="post" action="#" @submit.prevent="nextStep()">
          <div class="question-body">
            <div class="question-header row">
              <div class="col-12">
                <h2 class="question-text">
                  Almost there - set a location for your project
                </h2>
              </div>
              <div class="col-12">
                <p class="question-guide">
                  Pick your country of legal residence if you are raising funds
                  as an individual. If you are raising funds for a business or
                  nonprofit, select the country where the entity is registered
                </p>
              </div>
            </div>
            <div class="categories row">
              <select
                class="category-choices"
                placeholder="Select your country"
                v-model="campaign.country"
              >
                <option disabled value="">Please select one</option>
                <option
                  value="choice"
                  v-for="country in countries"
                  :key="country.name"
                >
                  {{ country.name }}
                </option>
              </select>
            </div>
          </div>
          <div class="horizontal-line"></div>
          <div class="next row">
            <div class="col-xs-12">
              <button class="btn-secondary" id="btn-currency">
                Next: Currency
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="question-3 container" v-show="question === 3">
        <form class="form" action="#" method="post" @submit.prevent="nextStep()">
          <div class="question-body">
            <div class="question-header row">
              <div class="col-12">
                <h2 class="question-text">
                  Last one—choose the currency you are using for the project.
                </h2>
              </div>
              <div class="col-12">
                <p class="question-guide">
                  Pick your country of legal residence if you are raising funds
                  as an individual. If you are raising funds for a business or
                  nonprofit, select the country where the entity is registered
                </p>
              </div>
            </div>
            <div class="categories row">
              <select
                class="category-choices col-xs-12"
                placeholder="Select the currency"
                v-model="campaign.currency"
              >
                <option disabled value="">Please select one</option>
                <option
                  value="choice"
                  v-for="country in countries"
                  :key="country.name"
                >
                  {{ country.currencyAbbr }}
                </option>
              </select>
            </div>

            <div class="horizontal-line"></div>
            <div class="next row">
              <div class="col-xs-12">
                <button class="btn-secondary" id="btn-next-campaign">
                  Next:Campaign Details
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="content-section" v-show="question === 4">
        <form @submit.prevent="registerCampaignHandler(campaign)">
          <div class="campaign-info">
            <h2 class="campaign-info-title">Basics</h2>
            <p class="campaign-info-expl">
              Make a good first impression: introduce your campaign objectives
              and entice people to learn more. This basic information will
              represent your campaign on your page, cards and in searches.
            </p>
          </div>
          <div class="campaign-info">
            <h2 class="campaign-info-title">Campaign Title</h2>
            <div>
              <p class="campaign-info-expl">
                What is the title of your campaign?
              </p>
            </div>
            <div class="campaign-info-input">
              <input
                v-model="campaign.title"
                placeholder="Campaign Title"
                type="text"
              />
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
              <textarea
                v-model="campaign.tagLine"
                placeholder="Enter Campaign Tagline :-)"
                rows="2"
                cols="80"
              ></textarea>
            </div>
          </div>
          <div class="campaign-info">
            <h2 class="campaign-info-title">Campaign Card Image</h2>
            <div>
              <p class="campaign-info-expl">
                Upload a square image that represents your campaign
              </p>
              <p class="campaign-info-expl">
                1080 * 1080 recommended resolution. 220 * 220 minimum
                resolution.
              </p>
            </div>
            <div class="campaign-info-input">
              <input
                type="file"
                class="card-upload"
                name="campaign-card-image-upload"
                @change="handleFileUploadEvent"
              />
              <label for="file">Select file</label>
            </div>
          </div>
          <div class="campaign-info">
            <h2 class="campaign-info-title">Pitch Video or Image</h2>
            <div>
              <p class="campaign-info-expl">
                Make a good first impression: introduce your campaign objectives
                and entice people to learn more. This basic information will
                represent your campaign on your page, cards and in searches.
              </p>
            </div>
            <div class="campaign-info-input">
              <input
                v-on="campaign.videoUrl"
                type="text"
                placeholder="Paste Video Link"
              />
            </div>
          </div>
          <div class="campaign-info">
            <h2 class="campaign-info-title">Tags</h2>
            <div>
              <p class="campaign-info-expl">
                Enter up to five keywords that best describe your campaign.
                These tags will help with organization and discoverability.
              </p>
            </div>
            <div class="campaign-info-input">
              <textarea
                v-model="campaign.tags"
                placeholder="...project, hiking-gear, assistance,"
                rows="2"
                cols="80"
              ></textarea>
            </div>
          </div>

          <div class="campaign-info">
            <h2 class="campaign-info-title">Start Date</h2>
            <div class="campaign-info-input">
              <input
                v-model="campaign.startDate"
                type="date"
                name="campaign-card-image-upload"
              />
            </div>
          </div>

          <div class="campaign-info">
            <h2 class="campaign-info-title">End Date</h2>
            <div class="campaign-info-input">
              <input
                v-on="campaign.endDate"
                type="date"
                name="campaign-card-image-upload"
              />
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
              <label type="number" placeholder="16, 18, 20, 79 ...."></label>
            </div>
          </div>

          <div class="horizontal-line"></div>
          <div class="next row">
            <div class="col-xs-12">
              <button class="btn-secondary">Create</button>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </section>
</template>
