<template>
    <div>
        <label class="sr-only">{{ label }}</label>
        <div class="relative">
            <input :type="type" :value="modelValue" class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                :placeholder="label" @input="$emit('update:modelValue', $event.target?.value)" />
        </div>
    </div>
</template>

<script setup lang="ts">

defineProps({
    label: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    modelValue: {
        type: String,
        default: ''
    }
})

defineEmits(['update'])

</script>
