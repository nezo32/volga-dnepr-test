<template>
  <div class="loading d-flex align-center justify-center">
    <VProgressCircular indeterminate :size="100" :width="7" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loading {
  width: 80vh;
}
</style>
