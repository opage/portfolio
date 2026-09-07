<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { useDict } from '../dict'
import { projectMetas } from '../projects-data'
import UiPill from './ui/UiPill.vue'

const dict = useDict()

const projects = computed(() =>
  projectMetas.map((meta) => {
    const item = (dict.value.projects.items as Record<string, { title: string; description: string }>)[
      meta.id
    ]
    return { ...meta, title: item?.title ?? meta.id, description: item?.description ?? '' }
  }),
)
</script>

<template>
  <div class="my-6 mb-8 grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
    <div v-for="project in projects" :key="project.id" class="card flex flex-col overflow-hidden">
      <img :src="withBase(project.cover)" :alt="project.title" class="aspect-[2/1] w-full object-cover" />
      <div class="flex flex-1 flex-col p-4">
        <h3 class="m-0 text-lg font-semibold text-brand-700 dark:text-brand-200">{{ project.title }}</h3>
        <p class="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">{{ project.company }}</p>
        <p class="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{{ project.description }}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">
          <UiPill v-for="t in project.tech" :key="t" size="sm">{{ t }}</UiPill>
        </div>
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-auto pt-3 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          {{ dict.projects.learnMore }}
        </a>
      </div>
    </div>
  </div>
</template>
