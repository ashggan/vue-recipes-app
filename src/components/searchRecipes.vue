<template>
    <div class="text-4xl font-bold my-5 capitalize items-center flex">
        <formInput label="Recipe image" type="text" v-model="keyWord" />
    </div>
    <ul class="shadow-xl border-2 border-gray-300 p-3 mb-3">
        <li v-for="item in filteredRecipes" :key="item.slug">
            {{ item.name }}
        </li>
    </ul>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue';
import formInput from '@/components/formInput.vue';
import type { Recipe } from '@/types/recipe';

const props = defineProps({
    recipes: {
        type: Array as () => Recipe[],
        default: () => []
    }
});

const keyWord = ref<string>('');
const filteredRecipes = computed(() => {
    return props.recipes.filter((item) => item.name.toLowerCase().indexOf(keyWord.value.toLowerCase()) !== -1);
});

</script>