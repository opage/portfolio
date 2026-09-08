<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { useDict } from '../dict'

const dict = useDict()
const pdfUrl = computed(() => withBase(dict.value.resume.pdf))
</script>

<template>
  <a class="btn-primary mb-4" :href="pdfUrl" download>{{ dict.resume.download }}</a>

  <iframe
    :src="pdfUrl + '#toolbar=0'"
    class="block h-[70vh] min-h-[320px] w-full rounded-lg border border-brand-400/60 md:h-[800px]"
  ></iframe>

  <p class="mt-3 text-center text-sm text-gray-600 dark:text-gray-300">
    <a
      :href="pdfUrl"
      target="_blank"
      rel="noopener"
      class="font-semibold text-brand-600 hover:underline dark:text-brand-400"
    >
      {{ dict.resume.open }}
    </a>
  </p>
</template>
