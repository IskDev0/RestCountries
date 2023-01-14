<template>
  <div class="details">
    <div class="container">
      <button @click="$router.push('/')" class="backBtn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_14_6)">
            <path
                d="M3.63599 11.293C3.44852 11.4805 3.3432 11.7348 3.3432 12C3.3432 12.2652 3.44852 12.5195 3.63599 12.707L9.29299 18.364C9.48159 18.5462 9.73419 18.6469 9.99639 18.6447C10.2586 18.6424 10.5094 18.5372 10.6948 18.3518C10.8802 18.1664 10.9854 17.9156 10.9877 17.6534C10.9899 17.3912 10.8891 17.1386 10.707 16.95L6.75699 13H20C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H6.75699L10.707 7.05C10.8891 6.8614 10.9899 6.60879 10.9877 6.3466C10.9854 6.0844 10.8802 5.83359 10.6948 5.64818C10.5094 5.46277 10.2586 5.3576 9.99639 5.35532C9.73419 5.35305 9.48159 5.45384 9.29299 5.636L3.63599 11.293Z"
                fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_14_6">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        <span>Back</span>
      </button>
      <div class="details__item" v-for="country in countryData">
        <img class="details__image" :src="country.flags.svg" :alt="country.name.common">
        <div class="details__wrapper">
          <p class="details__title">{{ country.name.common }}</p>
          <div class="details__wrapper-inner">
            <p class="details__text"><span class="details__text-title"> Native name:</span>
              {{ Object.values(country.name.nativeName)[0].official }}</p>
            <p class="details__text"><span
                class="details__text-title"> Population: </span>{{ country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </p>
            <p class="details__text"><span class="details__text-title"> Region: </span>{{ country.region }}</p>
            <p class="details__text"><span class="details__text-title"> Subregion: </span>{{ country.subregion }}</p>
            <p class="details__text"><span class="details__text-title"> Capital: </span>{{ country.capital.join(", ") }}
            </p>
            <p class="details__text"><span class="details__text-title"> Top Level </span>Domain:
              {{ country.tld.join(", ") }}</p>
            <p class="details__text" v-for="currency in Object.values(country.currencies)"><span class="details__text"> Currencies: </span>{{ currency.name }}
              ({{ currency.symbol }})</p>
            <p class="details__text"><span
                class="details__text-title"> Languages: </span>{{ Object.values(country.languages).join(', ') }}</p>
          </div>
          <div class="details__text borders"><span class="details__text-title">Border countries: </span>
            <div class="border"><span v-for="border in country.borders" class="border__item">{{ border }}</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

import {useRoute} from "vue-router";

const route = useRoute()

let countryName = computed(() => {
  return route.params.name
})

let countryData = ref([])


let getCurrentCountry = onMounted(async () => {
  let response = await fetch(`https://restcountries.com/v3.1/name/${countryName.value}?fullText=true`)
  countryData.value = await response.json()
  console.log(countryData.value)
})


</script>
