import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../components/HomeView.vue';
import QuestionViewVue from '../components/questions/QuestionView.vue';
import ContentView from '../components/content/ContentView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/campaign/questions',
      name: 'questions',
      component: () => QuestionViewVue,
    },
    {
      path: '/campaign/content',
      name: 'content',
      component: () => ContentView,
    },
  ],
});

export default router;
