<template>
  <article class="home d-flex flex-column-reverse flex-lg-row flex-xl-row justify-space-between">
    <MainContent v-if="!haveError && res_length > 0" :key="apply">
      <Suspense>
        <template #default>
          <ListComponent
            v-model:res_length="res_length"
            :origin="origin"
            :destination="destination"
            :trip_class="tripClass"
            :one_way="oneWay"
            :currency="currency"
          />
        </template>
        <template #fallback>
          <LoadingComponent />
        </template>
      </Suspense>
    </MainContent>
    <MainContent v-if="res_length == 0">
      <NothingFoundComponent />
    </MainContent>
    <MainContent v-if="haveError">
      <ErrorComponent />
    </MainContent>
    <SideDrawer
      v-model:apply="apply"
      v-model:origin="origin"
      v-model:destination="destination"
      v-model:currency="currency"
      v-model:trip-class="tripClass"
      v-model:one-way="oneWay"
    />
  </article>
</template>

<script setup lang="ts">
import { onErrorCaptured, watch, ref } from 'vue'
import { TripClass, type Currencies } from '@/@types'

import SideDrawer from '@/components/SideDrawer.vue'
import MainContent from '@/components/MainContent.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'
import ListComponent from '../components/ListComponent.vue'
import ErrorComponent from '@/components/ErrorComponent.vue'
import NothingFoundComponent from '@/components/NothingFoundComponent.vue'

// Variables to store inputs
const origin = ref('VKO')
const destination = ref('LGA')
const tripClass = ref(TripClass.Economy)
const oneWay = ref(true)
const currency = ref<Currencies>('rub')

// Variable checking API response length
const res_length = ref(1)

// Check if changes applied and reset value
const apply = ref(0)
watch(apply, () => {
  res_length.value = 1
  haveError.value = false
})

// Handling the unexpected errors
const haveError = ref(false)
onErrorCaptured(() => {
  haveError.value = true
})
</script>

<style scoped lang="scss">
.home {
  gap: 20px;
}
</style>
