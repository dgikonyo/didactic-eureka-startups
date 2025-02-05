import { createRouter, createWebHistory } from 'vue-router';

import SignInView from '@/views/auth/SignInView.vue';
import SignUpView from '@/views/auth/SignUpView.vue';
import HomeView from '../views/HomeView.vue';
import QuestionViewVue from '@/views/questions/QuestionView.vue';
import ExploreView from '@/views/campaign/ExploreView.vue';
import ArticleView from '@/views/article/ArticleView.vue';
import CampaignView from '@/views/campaign/CampaignView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/campaigns/questions',
      name: 'questions',
      component: () => QuestionViewVue,
    },
    {
      path: '/campaigns/explore',
      name: 'explore',
      component: () => ExploreView,
    },
    {
      path: '/campaigns/:id',
      name: 'campaign',
      component: () => CampaignView,
    },
    {
      path: '/article',
      name: 'article',
      component: () => ArticleView,
    },

    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => SignInView,
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => SignUpView,
    },
  ],
});

export default router;
