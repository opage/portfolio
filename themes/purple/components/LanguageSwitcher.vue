<script setup lang="ts">
import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'

const { lang } = useData()
const route = useRoute()

const locales = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'lb', label: 'LB' },
]

const activeLang = computed(() => lang.value || 'en')

function toLocaleLink(code: string): string {
  const path = route.path

  const blog = /^\/blog\/(?:en|fr|lb)(\/.*)?$/.exec(path)
  if (blog) {
    return `/blog/${code}${blog[1] ?? ''}`
  }

  const section = /^\/(about|experience|projects|resume)\//.exec(path)
  if (section) {
    return `/${section[1]}/${code}/`
  }

  return code === 'en' ? '/' : `/${code}/`
}
</script>

<template>
  <div class="ml-2 flex items-center gap-1.5">
    <a
      v-for="locale in locales"
      :key="locale.code"
      :href="toLocaleLink(locale.code)"
      :class="{ 'bg-brand-500/15 text-brand-600 dark:text-brand-400': activeLang === locale.code }"
      class="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-semibold text-gray-500 no-underline transition-colors hover:text-brand-500 dark:text-gray-400"
      :aria-label="locale.label"
      :title="locale.label"
    >
      <svg
        viewBox="0 0 24 16"
        class="h-3.5 w-5 rounded-[2px] shadow-[0_0_0_1px_rgba(128,128,128,0.4)]"
        aria-hidden="true"
      >
        <template v-if="locale.code === 'en'">
          <rect width="24" height="16" fill="#012169" />
          <g stroke-linecap="round">
            <path d="M0,0 L24,16 M24,0 L0,16" stroke="#fff" stroke-width="3" />
            <path d="M0,0 L24,16 M24,0 L0,16" stroke="#C8102E" stroke-width="1.6" />
            <path d="M12,0 L12,16 M0,8 L24,8" stroke="#fff" stroke-width="4.4" />
            <path d="M12,0 L12,16 M0,8 L24,8" stroke="#C8102E" stroke-width="2.6" />
          </g>
        </template>
        <template v-else-if="locale.code === 'fr'">
          <rect width="8" height="16" fill="#0055A4" />
          <rect x="8" width="8" height="16" fill="#FFFFFF" />
          <rect x="16" width="8" height="16" fill="#EF4135" />
        </template>
        <template v-else>
          <rect width="24" height="5.333" fill="#EF3340" />
          <rect y="5.333" width="24" height="5.333" fill="#FFFFFF" />
          <rect y="10.666" width="24" height="5.334" fill="#00A3E0" />
        </template>
      </svg>
      <span>{{ locale.label }}</span>
    </a>
  </div>
</template>
