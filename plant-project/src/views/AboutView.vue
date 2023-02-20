<script>
import axios from 'axios';
import { ref, watch } from 'vue';
import { codiceMeteo } from '../objects/datagenerator'
export default {
  setup() {
    const latitude = ref('')
    const tMin = ref('')
    const tMax = ref('')
    const meteo = ref('')

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    const oggi = ref(today)
    return {
      latitude, tMin, tMax, oggi
    }
  },
  mounted() {
    function getToday() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      return today;
    }

    axios
      // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      // .then(response => console.log(response.data))

      .get('https://api.open-meteo.com/v1/forecast?latitude=45.41&longitude=11.89&hourly=temperature_2m,weathercode&start_date=' + getToday() + '&end_date=' + getToday())
      .then(response => (this.latitude = response.data.latitude) && (this.tMax = response.data.hourly.temperature_2m[response.data.hourly.temperature_2m.length - 1]) && (this.tMin = response.data.hourly.temperature_2m[0]) && console.log(response.data))

  }
}
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Che tempo fa a Padova?</h3>
    <p>Min: {{ tMin }} Max: {{ tMax }}</p>
    <img src="" />
    <p>{{ oggi }}</p>
  </div>
</template>

<style></style>
