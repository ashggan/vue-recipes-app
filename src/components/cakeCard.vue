<template>
    <a href="#" class="block" @click="goTo()">
        <img alt="Signage" :src="recipe.display.images[0]"
            class=" h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72" />
        <div class="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
            <strong class="font-medium">{{ recipe.display.displayName }} </strong>

            <span class="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

            <!-- <p class="mt-0.5 opacity-50 sm:mt-0">Branding / Signage</p> -->
        </div>
    </a>
</template>

<script  lang="ts" setup>
import { createSlug } from '@/utils'
import router from '@/router'

const props = defineProps(['recipe'])
const slug = createSlug(props.recipe.display.displayName)

const goTo = () => {
    router.push({ name: 'recipe-detail', params: { slug: slug } })
}

</script> 