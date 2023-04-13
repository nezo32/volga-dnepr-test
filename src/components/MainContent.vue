<template>
  <VCard class="main rounded-xl w-100">
    <div class="main__inner d-flex flex-column pa-5">
      <slot />
    </div>
  </VCard>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.main {
  height: fit-content;

  &__inner {
    gap: 20px;
  }
}
</style>
