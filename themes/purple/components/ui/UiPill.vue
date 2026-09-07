<script setup lang="ts">
withDefaults(defineProps<{ size?: 'sm' | 'md' }>(), { size: 'md' })
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-full border border-brand-400/50 font-medium text-brand-700 transition-colors dark:border-brand-400/30 dark:text-brand-300"
    :class="size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-sm'"
  >
    <slot />
  </span>
</template>
