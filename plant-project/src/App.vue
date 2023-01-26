<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AddPlant from './components/AddPlant.vue'
</script>

<template>
  <header>
    <div class="wrapper">


      <nav class="grid align-items-center pl-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  background-color: darkslategray;
  /* background-color: darkgreen; */
  height: 8vh;
}
</style>
