<template>
    <div class="text-4xl font-bold my-5 capitalize items-center flex">
        <formInput label="Search recipes" type="text" v-model="keyWord" @input="s" />
    </div>
    <ul v-if="filteredRecipes.length != 0" class="shadow-xl border-2 border-gray-300 p-5 mb-3">
        <li v-for="item in filteredRecipes" :key="item.slug">
            {{ item.name }}
        </li>
    </ul>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import formInput from '@/components/formInput.vue';
import type { Recipe } from '@/types/recipe';

const filteredRecipes = ref<Recipe[]>([])
const props = defineProps({
    recipes: {
        type: Array as () => Recipe[],
        default: () => []
    }
});


const keyWord = ref<string>('');
const s = (e: Event) => {
    filteredRecipes.value = props.recipes.filter((item) => item.name.toLowerCase().indexOf(keyWord.value.toLowerCase()) !== -1);
    if (keyWord.value === '') filteredRecipes.value = []
};

</script>