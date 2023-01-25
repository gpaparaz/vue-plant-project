<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AddPlant from './components/AddPlant.vue'
</script>

<template>
  <header>
    <div class="wrapper">


      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
