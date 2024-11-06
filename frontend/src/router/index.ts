import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import QuestionViewVue from '@/views/questions/QuestionView.vue';
import ContentView from '@/views/content/ContentView.vue';
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
      path: '/campaigns/content',
      name: 'content',
      component: () => ContentView,
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
  ],
});

export default router;
