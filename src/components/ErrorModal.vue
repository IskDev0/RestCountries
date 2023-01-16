<template>
  <div @click.self="countryStore.closeModal" class="modal">
    <div class="modal__content">
      <p>This country does not exist</p>
    </div>
  </div>
</template>

<script setup>
import {useCountryStore} from "../stores/country";

let countryStore = useCountryStore()
</script>
