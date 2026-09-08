<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useLocale } from '../locale'
import { experienceData } from '../experience-data'

const { locale } = useLocale()
const open = ref<number[]>([0, 1, 2])

function toggle(i: number) {
  open.value = open.value.includes(i)
    ? open.value.filter((x) => x !== i)
    : [...open.value, i]
}

function initials(name: string) {
  const parts = name
    .split(/\s+/)
    .filter((w) => /[A-Za-z0-9]/.test(w))
    .map((w) => w.match(/[A-Za-z0-9]/)?.[0]?.toUpperCase() ?? '')
  return parts.slice(0, 2).join('') || '?'
}

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function expandFromHash() {
  const hash = window.location.hash.replace(/^#/, '')
  if (!hash) return
  const index = experienceData.items.findIndex((job) => slugify(job.company) === hash)
  if (index >= 0 && !open.value.includes(index)) {
    open.value = [...open.value, index]
  }
}

onMounted(() => {
  expandFromHash()
  window.addEventListener('hashchange', expandFromHash)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', expandFromHash)
})
</script>

<template>
  <div class="my-6 mb-8">
    <div
      v-for="(job, i) in experienceData.items"
      :key="i"
      class="relative border-l-2 border-brand-400/60 pb-2 pl-6"
    >
      <span
        class="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-brand-400 bg-white dark:bg-brand-950"
      />
      <div class="flex gap-3">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-400/60 bg-brand-300/60 text-sm font-bold text-brand-900 dark:bg-brand-800/60 dark:text-white"
        >
          {{ initials(job.company) }}
        </span>
        <div class="min-w-0 flex-1 pb-6">
          <h2
            class="company text-base font-semibold text-brand-600 dark:text-brand-400"
            :id="slugify(job.company)"
          >
            {{ job.company }}
          </h2>
          <button
            type="button"
            class="flex w-full items-start justify-between gap-2 border-0 bg-transparent p-0 text-left"
            :aria-expanded="open.includes(i)"
            @click="toggle(i)"
          >
            <span class="flex flex-col gap-0.5">
              <span class="text-lg font-semibold text-gray-900 dark:text-white">{{ job.role[locale] }}</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ job.location }} · {{ job.period[locale] }} · {{ job.duration[locale] }}
              </span>
            </span>
            <span
              class="shrink-0 text-gray-400 transition-transform"
              :class="{ 'rotate-180': open.includes(i) }"
            >
              ▾
            </span>
          </button>
          <div v-if="open.includes(i)" class="mt-3">
            <p class="text-sm italic text-gray-600 dark:text-gray-300">{{ job.summary[locale] }}</p>
            <ul class="mt-2 list-disc pl-5 text-sm text-gray-700 dark:text-gray-200">
              <li v-for="h in job.highlights[locale]" :key="h" class="my-1">{{ h }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
