<template>
    <header class="bg-white dark:bg-gray-900">
        <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
            <div class="flex flex-1 items-center justify-end md:justify-between">
                <nav aria-label="Global" class="hidden md:block">
                    <ul class="flex items-center gap-6 text-sm">
                        <li>
                            <RouterLink
                                class="text-gray-500 capitalize transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                                :to="{ name: 'home' }">recipes</RouterLink>
                            <!-- <a class="" >  </a> -->
                        </li>
                    </ul>
                </nav>

                <div class="flex items-center gap-4">
                    <routerLink :to="{ name: 'new-recipe' }" class="sm:flex sm:gap-4">

                        <a class="block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700 dark:hover:bg-teal-500"
                            href="/">
                            Add recipe
                        </a>
                    </routerLink>

                    <button
                        class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75 md:hidden">
                        <span class="sr-only">Toggle menu</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<style scoped></style>