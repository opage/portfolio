<script setup lang="ts">
import { withBase } from 'vitepress'
import { useDict } from '../dict'

const dict = useDict()

function rich(text: string): string {
  return text.replace(/\*\*([^*]+)\*\*/g, '<span class="accent">$1</span>')
}
</script>

<template>
  <div class="my-8 flex items-center gap-10 max-sm:flex-col">
    <div class="min-w-0 flex-1">
      <h2 class="mt-0" v-html="rich(dict.intro.heading)" />
      <p v-for="(paragraph, i) in dict.intro.body" :key="i" v-html="rich(paragraph)" />
      <SocialLinks />
    </div>
    <img
      class="avatar-image h-[200px] w-[200px] shrink-0"
      :src="withBase('/images/avatar.svg')"
      :alt="dict.intro.avatarAlt"
    />
  </div>
</template>
