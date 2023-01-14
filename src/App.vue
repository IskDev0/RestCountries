<script setup>
import {RouterView} from "vue-router"
import TheHeader from "./components/TheHeader.vue";
</script>

<template>
  <TheHeader/>
  <main class="main">
    <RouterView/>
  </main>
</template>