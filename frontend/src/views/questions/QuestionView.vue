<template>
  <!-- https://codepen.io/thomasMM/pen/jOWxOpV?editors=1000 -->
  <NavbarComponent></NavbarComponent>
  <section class="questions-section">
    <div class="question-stepper">
      <div class="question" :class="{
        'question-active': question === 1,
        'question-done': question > 1,
      }">
        1
      </div>
      <div class="question" :class="{
        'question-active': question === 2,
        'question-done': question > 2,
      }">
        2
      </div>
      <div class="question" :class="{
        'question-active': question === 3,
        'question-done': question > 3,
      }">
        3
      </div>
    </div>
    <transition name="slide-fade">
      <div class="question-1 container" v-show="question === 1">
        <form class="form" method="post" action="#" @submit.prevent="next">
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
                  <select class="category-choices" placeholder="Select" v-model="campaign.category">
                    <option disabled value="">Please select one</option>
                    <option value="choice">FinTech</option>
                    <option value="choice">Saab</option>
                    <option value="choice">Mercedes</option>
                    <option value="choice">Audi</option>
                  </select>
                </div>
              </div>

              <div class="sub-category col-xs-12 col-md-6 col-lg-6">
                <div class="col-12">
                  <p>Sub Category</p>
                </div>
                <div class="col-12">
                  <select class="category-choices" placeholder="Select" v-model="campaign.sub_category">
                    <option disabled value="">Please select one</option>
                    <option value="choice">FinTech</option>
                    <option value="choice">Saab</option>
                    <option value="choice">Mercedes</option>
                    <option value="choice">Audi</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="horizontal-line"></div>
          <div class="next row">
            <div class="col-xs-12">
              <button class="btn-secondary" id="btn-location" @click.prevent="next()">
                Next: Location
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition name="slide-fade">
      <div class="question-2 container" v-show="question === 2">
        <form class="form" method="post" action="#" @submit.prevent="next()">
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
              <select class="category-choices" placeholder="Select your country" v-model="campaign.country">
                <option disabled value="">Please select one</option>
                <option value="choice" v-for="country in countries" :key="country._id">
                  {{ country.country_name }}
                </option>
              </select>
            </div>
          </div>
          <div class="horizontal-line"></div>
          <div class="next row">
            <div class="col-xs-12">
              <button class="btn-secondary" id="btn-currency" @click="next">
                Next: Currency
              </button>
            </div>
          </div>
        </form>
      </div>
    </transition>

    <transition class="slide-fade">
      <div class="question-3 container" v-show="question === 3">
        <form class="form" action="#" @submit.prevent="registerCampaign">
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
              <select class="category-choices col-xs-12" placeholder="Select the currency" v-model="campaign.currency">
                <option disabled value="">Please select one</option>
                <option value="choice" v-for="country in countries" :key="country._id">
                  {{ country.country_currency }}
                </option>
              </select>
            </div>

            <div class="horizontal-line"></div>
            <div class="next row">
              <div class="col-xs-12">
                <RouterLink class="btn-secondary" to="/campaigns/content" id="btn-next-campaign">Next:Campaign Details
                </RouterLink>
              </div>
            </div>
          </div>
        </form>
      </div>
    </transition>
  </section>
</template>
<script setup lang="ts">
import NavbarComponent from '@/components/NavbarComponent.vue';
import '@/assets/main.css';
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import type { Campaign } from '@/types/Campaign';
import { getCountries } from '@/services/CountryService';
import { registerCampaign } from '@/services/CampaignService';
import type { Country } from '@/types/Country';

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
  duration: '',
  targetAmount: '',
  videoUrl: '',
  videoOverlayUrl: '',
  story: '',
  supportEmail: '',
  fundingModel: '',
  user_id: '',
  campaignStatus: '',
  countryId: '',
});

const countries = ref<Country[]>([])

onMounted(async () => {
  countries.value = await getCountries();
});

const addCampaign = async (campaign: Campaign) => {
  await registerCampaign(campaign);
};

const question = ref(1);

// Methods for navigating between questions
const next = () => {
  if (question.value < 3) {
    question.value++;
  }
};

const registerCampaignHandler = async () => {
  await registerCampaign(campaign.value);
};

// get data to be saved into database
data: () => {
  return {
    questions: {},
    countries,
    currencies: {},
    question,
    addCampaign,
  };
};
</script>
