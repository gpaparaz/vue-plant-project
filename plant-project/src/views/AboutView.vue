<script>
import axios from 'axios';
import { ref, watch } from 'vue';
import { codiceMeteo } from '../objects/datagenerator'

export default {
  setup() {
    const latitude = ref('')
    const tMin = ref('')
    const tMax = ref('')
    const meteoMattina=''
    const meteoPomeriggio = ''

    const imgMattina = ref('')
    const imgPomeriggio = ref('')

    var arrayMeteo = []

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;

    const oggi = ref(today)

    return {
      latitude, tMin, tMax, oggi, meteoMattina, meteoPomeriggio, arrayMeteo, imgMattina, imgPomeriggio
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
      .get('https://api.open-meteo.com/v1/forecast?latitude=45.41&longitude=11.89&hourly=temperature_2m,weathercode&start_date=' + getToday() + '&end_date=' + getToday())
      .then(response => {
        this.latitude = response.data.latitude;
        this.tMax = Math.max(...response.data.hourly.temperature_2m);
        this.tMin = Math.min(...response.data.hourly.temperature_2m);
        
        this.arrayMeteo = response.data.hourly.weathercode;

        let mattina = this.arrayMeteo.slice(0, 11)
        let mapMattina = mattina.map((a) => mattina.filter((b) => a === b).length);

        let pomeriggio = this.arrayMeteo.slice(12, 24)
        let mapPomeriggio = pomeriggio.map((a) => pomeriggio.filter((b) => a === b).length);

        this.meteoMattina = mattina[mapMattina.indexOf(Math.max.apply(null, mapMattina))];
        this.meteoPomeriggio = pomeriggio[mapPomeriggio.indexOf(Math.max.apply(null, mapPomeriggio))];

        this.imgMattina = new URL('../assets/img/' + this.meteoMattina + '.png', import.meta.url).href
        this.imgPomeriggio =  new URL('../assets/img/' + this.meteoPomeriggio + '.png', import.meta.url).href

        console.log(response.data);
      })
    }
    
  }

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>Che tempo fa a Padova?</h3>
    <p>Min: {{ tMin }} Max: {{ tMax }}</p>
    <img :src="imgMattina"  />
    <img :src="imgPomeriggio" />
    <p>{{ meteoMattina }} {{ meteoPomeriggio }}</p>
  </div>
</template>

<style></style>
