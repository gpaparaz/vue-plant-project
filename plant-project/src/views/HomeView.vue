<script>
import AddPlant from '../components/AddPlant.vue';
import PlantDetail from '../components/PlantDetail.vue';
import { ref } from 'vue';

export default {

  created() {
    this.emitter.on('showDetails', (value) => {
      console.log('homeview ha intercettato l evento ' + value.specie);
      this.processaRicezioneDaPlantList(value);
    })
  },

  methods: {
    //ricevi i dati del row da PlantList, nascondi la view di PlantList e rendi visibile quella di PlantDetail
    //setta i campi ricevuti per inviarli poi a PlantDetail
    processaRicezioneDaPlantList(piantaRicevutadaPlantList) {
      this.piantaInviataAPlantDetail.specie = piantaRicevutadaPlantList.specie;
      this.piantaInviataAPlantDetail.varieta = piantaRicevutadaPlantList.varieta;
      this.piantaInviataAPlantDetail.quantita = piantaRicevutadaPlantList.quantita
      this.piantaInviataAPlantDetail.img = piantaRicevutadaPlantList.image
      this.showPlantList = false;
    }
  },

  setup() {

    const showPlantList = ref(true)

    const piantaInviataAPlantDetail = ref({ specie: '', varieta: '', quantita: '', img: '' });

    return {
      showPlantList, piantaInviataAPlantDetail
    }

  },
  components: { AddPlant, PlantDetail }
}

</script>

<template>
  <!-- <h1>This is home view page</h1> -->
  <div class="grid landing align-items-center">
    <h1>This is home view page</h1>

  </div>
  <AddPlant v-if="showPlantList">
  </AddPlant>
  <PlantDetail v-else @showList="showPlantList = true" :piantaRicevutaDaAddPlant="piantaInviataAPlantDetail">
  </PlantDetail>
</template>

<style scoped>
.landing {
  background-image: url('../assets/img/felce.jpg');
  height: 20vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
