<script setup lang="ts">
import { withBase } from 'vitepress'

const props = defineProps<{ pdf: string; label: string }>()
</script>

<template>
  <a class="btn-primary mb-4" :href="withBase(props.pdf)" download>{{ props.label }}</a>
  <iframe
    :src="withBase(props.pdf) + '#toolbar=0'"
    class="h-[800px] w-full rounded-lg border border-brand-400/60"
  ></iframe>
</template>
