<script setup lang="ts">
import { withBase } from 'vitepress'
import { useLocale } from '../locale'
import { homeData } from '../home-data'
import { rich } from '../rich'

const { locale } = useLocale()
</script>

<template>
  <div class="my-8 flex items-center gap-10 max-sm:flex-col">
    <div class="min-w-0 flex-1">
      <h2 class="mt-0" v-html="rich(homeData.intro.heading[locale])" />
      <p v-for="(paragraph, i) in homeData.intro.body[locale]" :key="i" v-html="rich(paragraph)" />
      <SocialLinks />
    </div>
    <img
      class="avatar-image h-[200px] w-[200px] shrink-0"
      :src="withBase('/images/avatar.svg')"
      :alt="homeData.intro.avatarAlt[locale]"
    />
  </div>
</template>
