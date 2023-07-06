<template>
  <div class="container py-10 items-center">
    <div class="text-4xl font-bold my-5 capitalize text-center">recipes </div>
    <searchRecipe :recipes="recipes" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <cakeCard :recipe="recipe" v-for="recipe in recipes" :key="recipe.slug" />
    </div>
  </div>
</template>

<script setup lang="ts">
import searchRecipe from '@/components/searchRecipes.vue'
import { storeToRefs } from 'pinia'
import useRecipeStore from '@/stores/recipeStore'
import cakeCard from '@/components/cakeCard.vue'

const store = useRecipeStore()
const { recipes } = storeToRefs(store)

</script>
 