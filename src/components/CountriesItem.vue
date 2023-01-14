<template>
  <div @click="$router.push(`country/${country.name.official}`)" class="country">
    <img class="country__image" :src="data.flags.svg" alt="">
    <div class="country__text">
      <p class="country__name">{{ data.name.common }}</p>
      <p><span class="country__item">Population:</span> {{ population }}</p>
      <p><span class="country__item">Region:</span> {{ data.region }}</p>
      <p><span class="country__item">Capital:</span> {{ capitals }}</p>
    </div>
  </div>
</template>

<script setup>
import {computed} from "vue";

let props = defineProps({
  country: {
    type: Object,
    required: true
  }
})

let data = computed(() => {
  return props.country
})

let capitals = computed(() => {
  return props.country.capital?.join(", ")
})

let population = computed(() => {
  return props.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
})

</script>
