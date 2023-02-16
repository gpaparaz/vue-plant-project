<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
  setup() {
    return {

    }
  }
}
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
</style>
