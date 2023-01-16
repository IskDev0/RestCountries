<script setup>
import TheSearch from "../components/TheSearch.vue";
import CountriesList from "../components/CountriesList.vue";
import TheSelect from "../components/TheSelect.vue";
import TheLoader from "../components/TheLoader.vue"
import ErrorModal from "../components/ErrorModal.vue"

import {useCountryStore} from "../stores/country";

let countryStore = useCountryStore()

</script>

<template>
  <div class="container">
    <Transition>
    <ErrorModal v-if="countryStore.error" />
    </Transition>
    <div class="main__top">
      <TheSearch/>
      <TheSelect/>
    </div>
    <TheLoader v-if="countryStore.isLoading" />
    <CountriesList/>
  </div>
</template>
