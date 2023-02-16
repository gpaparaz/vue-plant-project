<script>
import axios from 'axios';
import { ref, watch } from 'vue';
export default {
  setup() {
    const latitude = ref('')
    return {
      latitude
    }
  },
  mounted() {
    axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => console.log(response.data))

      .get('https://api.open-meteo.com/v1/forecast?latitude=45.41&longitude=11.89&hourly=temperature_2m')
      // .then(response => console.log(response.data))
      .then(response => (this.latitude = response.data.latitude))

  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ latitude }}</p>
  </div>
</template>

<style>

</style>
