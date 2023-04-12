<template>
  <div class="home"></div>
</template>

<script setup lang="ts">
import { getMonthFlights } from '@/core'

console.log(await getMonthFlights())
</script>

<style scoped lang="scss"></style>
