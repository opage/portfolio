<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useLocale } from '../locale'
import { homeData } from '../home-data'

const { locale } = useLocale()
const words = computed(() => homeData.roles[locale.value])

const text = ref(words.value[0] ?? '')
const wordIndex = ref(0)
const deleting = ref(true)

let timer: ReturnType<typeof setTimeout> | undefined

function schedule(delay: number) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(type, delay)
}

function type() {
  const list = words.value
  if (!list.length) return
  const word = list[wordIndex.value] ?? ''

  if (!deleting.value) {
    text.value = word.slice(0, text.value.length + 1)
    if (text.value.length >= word.length) {
      deleting.value = true
      schedule(1600)
    } else {
      schedule(80)
    }
  } else {
    text.value = word.slice(0, text.value.length - 1)
    if (text.value.length === 0) {
      deleting.value = false
      wordIndex.value = (wordIndex.value + 1) % list.length
      schedule(250)
    } else {
      schedule(40)
    }
  }
}

function reset() {
  if (timer) clearTimeout(timer)
  text.value = words.value[0] ?? ''
  wordIndex.value = 0
  deleting.value = true
  schedule(2000)
}

onMounted(() => schedule(2000))

watch(words, reset)

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})
</script>

<template>
  <span class="typewriter">{{ text }}<span class="typewriter-cursor">|</span></span>
</template>
