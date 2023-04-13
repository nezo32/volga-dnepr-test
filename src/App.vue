<template>
  <VApp :theme="theme">
    <VAppBar>
      <VContainer class="d-flex flex-row justify-space-between">
        <VBtn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          @click="changeTheme()"
        >
          {{ theme }}
        </VBtn>
      </VContainer>
    </VAppBar>
    <VMain>
      <VContainer>
        <Suspense>
          <RouterView />
        </Suspense>
      </VContainer>
    </VMain>
  </VApp>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Variable to store the theme of the project
const theme = ref('dark')

// Function to change theme
const changeTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>

<style scoped lang="scss"></style>
