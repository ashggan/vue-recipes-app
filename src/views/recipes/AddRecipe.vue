<template>
    <div>
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-full lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl capitalize">new delicious recipe! {{ newRecipe }} </h1>
                </div>
                <form class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                    <formInput label="Recipe name" type="text" v-model="newRecipe.name" />
                    <formInput label="Recipe name" type="text" v-model="newRecipe.image" />

                    <div class="flex flex-col">
                        <div class="w-full my-4 p-2 border-b-2 border-b-indigo-500  flex justify-between"
                            v-for="item in newRecipe.ingredients" :key="item">
                            <p>{{ item }} </p>
                            <a>remove</a>
                        </div>
                    </div>
                    <div class="flex flex-row">
                        <formInput label="Ingredient name" type="text" v-model="item" />
                        <a class="rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white cursor-pointer"
                            @click="addIngredient">Add</a>
                        <!-- <a @click="addIngredient">Add</a> -->
                    </div>
                    <div class="flex items-center justify-between">
                        <button @click="saveRecipe"
                            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import type { Recipe } from '@/types/recipe';
import { ref, onMounted, watch, reactive } from 'vue';
import formInput from '@/components/formInput.vue';
import { createSlug } from '@/utils';
import useRecipeStore from '@/stores/recipeStore'
import { useRouter } from 'vue-router';


const newRecipe = reactive<Recipe>({
    name: '',
    slug: '',
    image: '',
    ingredients: [],
});

watch(() => newRecipe.name, (name) => {
    newRecipe.slug = createSlug(name);
});


const item = ref('')
const store = useRecipeStore()
const router = useRouter();

const addIngredient = () => {
    if ((item.value) === '') return
    newRecipe.ingredients.push(item.value)
    item.value = ''
}

const saveRecipe = async () => {
    store.addNewRecipe(newRecipe)
    router.push({ name: 'recipe-detail', params: { slug: newRecipe.slug } })
}
</script>

