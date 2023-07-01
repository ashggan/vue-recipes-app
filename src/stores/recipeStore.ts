import { defineStore } from 'pinia';
import { feed } from '@/api/data';

const useRecipeStore = defineStore('recipes', {
  state: () => {
    return {
      recipes: feed
    };
  },
  actions: {}
});

export default useRecipeStore;
