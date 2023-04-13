<template>
  <VCard variant="tonal" class="rounded-xl" v-for="(v, i) of display" :key="i">
    <div class="pa-5 d-flex justify-space-between align-center">
      <div class="d-flex align-center text-h4">
        <strong class="text-primary">{{ v.origin }}</strong>
        <VIcon icon="mdi-arrow-right-thick" size="x-small" color="primary" />
        <strong class="text-primary">{{ v.destination }}</strong>
      </div>
      <div>
        <div class="text-primary text-h5">
          Price: {{ `${v.value} ${switchCurrencyToSymbol(props.currency)}` }}
        </div>
      </div>
    </div>
    <VDivider />
    <div class="pa-5">
      <div class="d-flex pb-2 text-h6">
        <div>Date of departure: {{ dateTransform(v.depart_date) }}</div>
        <div class="pl-4" v-if="!one_way">Return date: {{ dateTransform(v.return_date) }}</div>
      </div>
      <div>Ticket at: {{ ticketDateTransform(v.found_at) }}</div>
      <div>Airline company: {{ v.gate }}</div>
      <div>Number of transfers: {{ v.number_of_changes }}</div>

      <div>Distance: {{ v.distance }}km</div>
    </div>
    <VDivider />
    <div class="pa-5">
      <VChip color="primary">{{ TripClass[v.trip_class] }}</VChip>
    </div>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getMonthFlights } from '@/core'
import { type Currencies, TripClass } from '@/@types'
import { switchCurrencyToSymbol, dateTransform, ticketDateTransform } from '@/utils'

const props = defineProps<{
  origin: string
  destination: string
  currency: Currencies
  one_way: boolean
  trip_class: TripClass
  res_length: number
}>()
const emit = defineEmits(['update:res_length'])

// Variable represents pages of request (can be implemented)
const page = ref(1)

// Initialize on mount
const display = ref<Awaited<ReturnType<typeof getMonthFlights>>>()
display.value = await updateInfo()
emit('update:res_length', display.value.length)

// Core function wrapper
async function updateInfo() {
  return await getMonthFlights({
    ...props,
    page: page.value
  })
}
</script>

<style scoped lang="scss"></style>
