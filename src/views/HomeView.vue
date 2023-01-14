<script setup>
import TheSearch from "../components/TheSearch.vue";
import CountriesList from "../components/CountriesList.vue";
import TheSelect from "../components/TheSelect.vue";</script>

<template>
  <div class="container">
    <div class="main__top">
      <TheSearch/>
      <TheSelect/>
    </div>
    <CountriesList/>
  </div>
</template>
