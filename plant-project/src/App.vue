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

<style>
nav {
  background-color: darkslategray;
  /* background-color: darkgreen; */
  height: 8vh;
}

h2 {
  color: rebeccapurple;
}

button {
  background-color: pink;
  border: 2px solid palevioletred;
  border-radius: 5px;
  min-height: 30px;
}
</style>
