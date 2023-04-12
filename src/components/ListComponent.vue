<template>
  <VCard variant="tonal"> aboba </VCard>
</template>

<script setup lang="ts">
import { getMonthFlights } from '@/core'

await getMonthFlights({ origin: 'VKO', destination: 'NYC', currency: 'usd' })
await new Promise((resolve) => {
  setTimeout(resolve, 5000)
})
</script>

<style scoped lang="scss"></style>
