import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import viewRecipe from '@/views/recipes/viewRecipe.vue';
import addRecipe from '@/views/recipes/addRecipe.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:slug',
    name: 'recipe-detail',
    component: viewRecipe
  },
  {
    path: '/new-recipe',
    name: 'new-recipe',
    component: addRecipe
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
