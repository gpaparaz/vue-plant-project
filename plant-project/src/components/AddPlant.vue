<script>

import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import PlantsList from '../views/PlantsList.vue'
import PlantDetail from './PlantDetail.vue'
import { Plant } from '../objects/plant'

export default {

  setup(props, context) {

    const showDialog = ref(false);
    const openBasic = () => {
      showDialog.value = true;
    };

    const piantaPerDialog = ref({ specie: '', varieta: '', quantita: '', img: '' });

    const piantaInviataAPlantlist = ref({ specie: '', varieta: '', quantita: '', img: '' });

    const piantaInviataAPlantDetail = ref({ specie: '', varieta: '', quantita: '', img: '' });

    function submit() {
      showDialog.value = false;

      //setto i valori inseriti nel form e che devo inviare a PlantList
      piantaInviataAPlantlist.value.specie = piantaPerDialog.value.specie;
      piantaInviataAPlantlist.value.varieta = piantaPerDialog.value.varieta;
      piantaInviataAPlantlist.value.quantita = piantaPerDialog.value.quantita;

      // faccio pulizia dei miei input text perchè altrimenti quando riapro la dialog trovo gli stessi dati di prima
      piantaPerDialog.value.specie = null;
      piantaPerDialog.value.varieta = null;
      piantaPerDialog.value.quantita = null;
    }

    const showPlantList = ref(true)

    //ricevi i dati del row da PlantList, nascondi la view di PlantList e rendi visibile quella di PlantDetail
    //setta i campi ricevuti per inviarli poi a PlantDetail
    function processaRicezioneDaPlantList(piantaRicevutadaPlantList) {
      piantaInviataAPlantDetail.value.specie = piantaRicevutadaPlantList.specie;
      piantaInviataAPlantDetail.value.varieta = piantaRicevutadaPlantList.varieta;
      piantaInviataAPlantDetail.value.quantita = piantaRicevutadaPlantList.quantita
      piantaInviataAPlantDetail.value.img = piantaRicevutadaPlantList.image
      showPlantList.value = false;

      // dettaglio.value = { specie: specieRicevuta, varieta: varietaRicevuta };
    }

    return {
      showDialog,
      openBasic,
      submit,
      piantaPerDialog,
      piantaInviataAPlantlist,
      showPlantList,
      processaRicezioneDaPlantList,
      piantaInviataAPlantDetail
    }
  },
  components: { PlantsList, PlantDetail }
}

</script>

<template>
  <h2>This is AddPlant vue page</h2>

  <div class="grid">
    <div class="col-6">
      <p>Add plant:</p>

      <button label="Show" icon="pi pi-external-link" @click="openBasic">Open dialog</button>


      <Dialog header="Header" v-model:visible="showDialog" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }">
        <div class="formContent flex flex-column p-6 border-round-xl">
          <h2>Inserisci la tua pianta</h2>
          <label class="py-1" for="speie">Specie</label>
          <InputText id="specie" type="text" v-model="piantaPerDialog.specie" />
          <br>
          <label class="py-1" for="speie">Varietà</label>
          <InputText id="varieta" type="text" v-model="piantaPerDialog.varieta" />
          <br>
          <label class="py-1" for="speie">Quantità</label>
          <InputText id="quantita" type="text" v-model="piantaPerDialog.quantita" />
          <br>
          <button @click="submit">Submit</button>
        </div>
      </Dialog>
    </div>

    <div class="col-6">
      <PlantsList v-if="showPlantList" :piantaInseritaInFormAddPlant="piantaInviataAPlantlist"
        @showDetails="processaRicezioneDaPlantList" />

      <PlantDetail v-else @showList="showPlantList = true" :piantaRicevutaDaAddPlant="piantaInviataAPlantDetail" />
    </div>
  </div>

</template>

<style scoped>
.formContent {
  /* width: 50vh; */
  background-color: beige;
}

label {
  color: black;
}
</style>
