<template>
    <section>
        <div class="relative mx-auto max-w-screen-xl px-4 py-8">
            <div class="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
                    <img alt="Les Paul" :src="recipe.image" class="aspect-square w-[80%] rounded-xl object-cover" />
                </div>

                <div class="sticky top-0">
                    <div class="mt-8 flex justify-between">
                        <div class="max-w-[35ch] space-y-2">
                            <h1 class="text-xl text-left font-bold sm:text-2xl">
                                {{ recipe.name }}
                            </h1>

                        </div>

                    </div>

                    <div class="mt-4">
                        <div class="prose max-w-none">
                            <p class="capitalize text-xl font-bold">ingredients</p>
                            <p v-for="ing in recipe.ingredients" :key="ing">
                                - {{ ing }}
                            </p>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import useRecipeStore from '@/stores/recipeStore'
import type { Recipe } from '@/types/recipe'

const route = useRoute()
const slug = route.params.slug;
const recipe = ref(<Recipe>{})
const store = useRecipeStore()
const { recipes } = storeToRefs(store)

onMounted(async () => {
    recipe.value = await recipes.value.find((e: Recipe) => e.slug === slug)
})


</script>

<style scoped></style>