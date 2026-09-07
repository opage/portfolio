<script setup lang="ts">
import { provide } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import LanguageSwitcher from './components/LanguageSwitcher.vue'

const { Layout } = DefaultTheme
const { isDark } = useData()

provide('toggle-appearance', () => {
  isDark.value = !isDark.value
  const screen = document.getElementById('VPNavScreen')
  if (screen) {
    document.querySelector<HTMLButtonElement>('button.VPNavBarHamburger')?.click()
  }
})
</script>

<template>
  <Layout>
    <template #nav-bar-content-after>
      <LanguageSwitcher />
    </template>
  </Layout>
</template>
