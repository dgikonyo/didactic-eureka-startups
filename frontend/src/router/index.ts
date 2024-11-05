import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/HomeView.vue';
import QuestionViewVue from '../components/questions/QuestionView.vue';
import ContentView from '../components/content/ContentView.vue';
import ExploreView from '@/components/explore/ExploreView.vue';
import ArticleView from '@/components/article/ArticleView.vue';
import CampaignView from '@/components/campaign/CampaignView.vue';

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
      name:'campaign',
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
