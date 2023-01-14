<template>
  <div class="search">
  <form @submit.prevent="countryStore.searchByName" class="search__form">
    <input v-model="countryStore.search" type="text" class="search__input" placeholder="Search for a country...">
  </form>
  </div>
</template>

<script setup>

import {ref} from "vue";
import {useCountryStore} from "../stores/country";

let countryStore = useCountryStore()

</script>
