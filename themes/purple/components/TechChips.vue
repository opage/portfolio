<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { techStack, toolStack } from '../tech-data'

const props = defineProps<{ kind: 'tech' | 'tool' }>()
const items = computed(() => (props.kind === 'tech' ? techStack : toolStack))
</script>

<template>
  <div class="tech-grid">
    <span v-for="item in items" :key="item.label" class="tech-chip">
      <img :src="withBase(item.icon)" alt="" /> {{ item.label }}
    </span>
  </div>
</template>
