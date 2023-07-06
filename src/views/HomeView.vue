<template>
  <div class="container py-10">
    <div class="text-4xl font-bold my-5 capitalize text-center">recipes {{ recipes.length }}</div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <cakeCard :recipe="recipe" v-for="recipe in recipes" :key="recipe.flag" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useRecipeStore from '@/stores/recipeStore'
import cakeCard from '@/components/cakeCard.vue'

const store = useRecipeStore()
const { recipes } = storeToRefs(store)

</script>
 