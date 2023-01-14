<template>
  <section class="countries">
    <CountriesItem :country="country" v-for="country in countryStore.countries"/>
  </section>
</template>

<script setup>
import CountriesItem from "./CountriesItem.vue";

import {useCountryStore} from "../stores/country";
import {onMounted} from "vue";

let countryStore = useCountryStore()

onMounted(() => {
  countryStore.loadCountries()
})

</script>
