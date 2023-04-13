<template>
  <VCard class="side-drawer rounded-xl flex-shrink-0">
    <div class="pa-5">
      <strong class="text-primary text-h4">Filters</strong>
    </div>
    <VDivider />
    <div class="pl-5 pt-5 pr-5">
      <VSelect
        color="primary"
        v-model="selectedOrigin"
        :items="origins"
        item-title="location"
        item-value="abbr"
        label="Origin"
        variant="filled"
      />
      <VSelect
        color="primary"
        v-model="selectedDestination"
        :items="destinations"
        item-title="location"
        item-value="abbr"
        label="Destination"
        variant="filled"
      />
    </div>
    <VDivider />
    <div class="pl-5 pt-5 pr-5">
      <div class="text-primary text-h6 pb-3">Trip class</div>
      <VRadioGroup v-model="selectedClass">
        <VRadio label="Economy class" value="0"></VRadio>
        <VRadio label="Business class" value="1"></VRadio>
        <VRadio label="First class" value="2"></VRadio>
      </VRadioGroup>
    </div>
    <VDivider />
    <div class="pa-5">
      <div class="text-primary text-h6 pb-3">Ticketing ploy</div>
      <div class="d-flex f-row align-center">
        <VSwitch
          v-model="selectedWay"
          hide-details
          inset
          true-value="Back-to-Back"
          false-value="One way"
          :label="selectedWay"
        />
      </div>
    </div>
    <VDivider />
    <div class="pa-5">
      <div class="text-primary text-h6 pb-5">Currency</div>
      <VBtnToggle divided v-model="selectedCurrency">
        <VBtn icon="mdi-currency-rub" />
        <VBtn icon="mdi-currency-usd" />
        <VBtn icon="mdi-currency-eur" />
      </VBtnToggle>
    </div>
    <VBtn size="large" color="primary" class="w-100" @click="apply()">Find</VBtn>
  </VCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { mergeToDropdown, switchCurrency } from '@/utils'
import type { Currencies, DrawerDropdown, TripClass } from '@/@types'

const props = defineProps<{
  origin: string
  destination: string
  tripClass: TripClass
  oneWay: boolean
  currency: Currencies
  apply: number
}>()
const emits = defineEmits([
  'update:origin',
  'update:destination',
  'update:tripClass',
  'update:oneWay',
  'update:currency',
  'update:apply'
])

// Different cities locations with IATA codes
const locationsMoscow = [
  'Moscow.Sheremetyevo.SVO',
  'Moscow.Vnukovo.VKO',
  'Moscow.Domodedovo.DME',
  'Moscow.Metropolitan Area.MOW'
]
const locationsNewYork = [
  'New York.John F Kennedy Intl.JFK',
  'New York.LaGuardia.LGA',
  'New York.Skyports SPB.NYS',
  'New York.Metropolitan Area.NYC',
  'New York.Newark Liberty Intl.EWR'
]
const locationsTokyo = [
  'Tokyo.Tokyo Intl (Haneda).HND',
  'Tokyo.Narita Intl.NRT',
  'Tokyo.Metropolitan Area.TYO',
  'Tokyo.Yokota AB.OKO'
]

// Merging all location to one array
const merged = mergeToDropdown(locationsMoscow, locationsNewYork, locationsTokyo)

// Dropdown list of available selections
const origins = ref<DrawerDropdown[]>(merged)
const destinations = ref<DrawerDropdown[]>(merged)

// Local variables to store user selection
const selectedOrigin = ref<DrawerDropdown>({ location: 'Moscow - Vnukovo', abbr: 'VKO' })
const selectedDestination = ref<DrawerDropdown>({ location: 'New York - LaGuardia', abbr: 'LGA' })
const selectedClass = ref('0')
const selectedWay = ref('One way')
const selectedCurrency = ref(0)

// Applying changes
function apply() {
  emits(
    'update:origin',
    selectedOrigin.value.abbr ? selectedOrigin.value.abbr : selectedOrigin.value
  )
  emits(
    'update:destination',
    selectedDestination.value.abbr ? selectedDestination.value.abbr : selectedDestination.value
  )
  emits('update:tripClass', Number(selectedClass.value))
  emits('update:oneWay', selectedWay.value == 'One way')
  emits('update:currency', switchCurrency(selectedCurrency.value))
  emits('update:apply', props.apply + 1)
}
</script>

<style scoped lang="scss">
.side-drawer {
  height: fit-content;
  min-width: 200px;
}

@media screen and (min-width: 900px) {
  .side-drawer {
    min-width: 350px;
  }
}
</style>
