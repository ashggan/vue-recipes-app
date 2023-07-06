import { defineStore } from 'pinia';
import { recipes } from '@/api/recipes.json';
import type { Recipe } from '@/types/recipe';

const useRecipeStore = defineStore('recipes', {
  state: () => {
    return {
      recipes: recipes //[] as Recipe[]
    };
  },
  actions: {
    addNewRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
    },
    getRecipes() {
      this.recipes = recipes;
    }
  }
});

export default useRecipeStore;
