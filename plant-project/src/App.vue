<script>
import { RouterLink, RouterView } from 'vue-router'
import AddPlant from './components/AddPlant.vue'
import axios from 'axios';
export default {
  setup() {
    const APIKey = '69f9afe03f52ef5c83887fc86dd79d99';
    return {

    }
  },
  mounted() {
    axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => console.log(response.data))

      .get('https://api.open-meteo.com/v1/forecast?latitude=45.41&longitude=11.89&hourly=temperature_2m')
      .then(response => console.log(response.data))

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
