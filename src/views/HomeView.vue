<template>
  <article class="home d-flex flex-column flex-lg-row flex-xl-row justify-space-between">
    <MainContent>
      <AsyncComponent />
    </MainContent>
    <SideDrawer />
  </article>
</template>

<script setup lang="ts">
import SideDrawer from '@/components/SideDrawer.vue'
import MainContent from '@/components/MainContent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import { defineAsyncComponent } from 'vue'

const AsyncComponent = defineAsyncComponent({
  loader: () => import('@/components/ListComponent.vue'),
  loadingComponent: LoadingComponent
})
</script>

<style scoped lang="scss">
.home {
  gap: 20px;
}
</style>
