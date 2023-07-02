<template>
    <a href="#" class="block" @click="goTo()">
        <img alt="Signage" :src="recipe.image"
            class=" h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />
        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong class="font-medium">{{ recipe.name }} </strong>
            <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
        </div>
    </a>
</template>

<script  lang="ts" setup>
import router from '@/router'

const props = defineProps(['recipe'])

const goTo = () => {
    router.push({ name: 'recipe-detail', params: { slug: props.recipe.slug } })
}

</script> 