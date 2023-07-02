import { defineStore } from 'pinia';
import { recipes } from '@/api/recipes';

const useRecipeStore = defineStore('recipes', {
  state: () => {
    return {
      recipes: recipes
    };
  },
  actions: {}
});

export default useRecipeStore;
