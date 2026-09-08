<script setup lang="ts">
import { withBase } from 'vitepress'
import { useLocale } from '../locale'
import { projectsData } from '../projects-data'
import UiPill from './ui/UiPill.vue'

const { locale } = useLocale()
</script>

<template>
  <div class="my-6 mb-8 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
    <div v-for="project in projectsData.items" :key="project.id" class="card flex flex-col overflow-hidden">
      <img :src="withBase(project.cover)" :alt="project.title[locale]" class="aspect-[2/1] w-full object-cover" />
      <div class="flex flex-1 flex-col p-4">
        <h3 class="m-0 text-lg font-semibold text-brand-700 dark:text-brand-200">{{ project.title[locale] }}</h3>
        <p class="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">{{ project.company }}</p>
        <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{{ project.description[locale] }}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <UiPill v-for="t in project.tech" :key="t" size="sm">{{ t }}</UiPill>
        </div>
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-auto pt-3 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          {{ projectsData.learnMore[locale] }}
        </a>
      </div>
    </div>
  </div>
</template>
