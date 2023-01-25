<script>

import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import PlantsList from '../views/PlantsList.vue'
import PlantDetail from './PlantDetail.vue'

export default {

  setup(props, context) {
    function openForm() {
      console.log("form aperto");
    }

    const display = ref(false);
    const openBasic = () => {
      display.value = true;
    };

    const specie = ref("");
    const varieta = ref("");
    const quantita = ref("");

    const parentVarieta = ref('')
    const parentSpecie = ref('')
    const parentQuantita = ref('')

    function submit() {
      display.value = false;
      parentSpecie.value = specie.value;
      parentVarieta.value = varieta.value;
      parentQuantita.value = quantita.value;

      // faccio pulizia dei miei input text perchè altrimenti quando riapro la dialog trovo gli stessi dati di prima
      specie.value = null;
      varieta.value = null;
      quantita.value = null;
    }

    const showPlantList = ref(true)

    let speciePerDettaglio = ''
    let varietàPerDettaglio = ''

    function processaRicezioneDaChild(specieRicevuta, varietaRicevuta) {
      showPlantList.value = false;
      speciePerDettaglio = specieRicevuta;
      varietàPerDettaglio = varietaRicevuta;
    }

    return {
      openForm,
      display,
      openBasic,
      submit,
      specie,
      varieta,
      quantita,
      parentQuantita,
      parentSpecie,
      parentVarieta,
      showPlantList,
      processaRicezioneDaChild
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


      <Dialog header="Header" v-model:visible="display" :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
        :style="{ width: '50vw' }">
        <div class="formContent flex flex-column p-6 border-round-xl">
          <h2>Inserisci la tua pianta</h2>
          <label class="py-1" for="speie">Specie</label>
          <InputText id="specie" type="text" v-model="specie" />
          <br>
          <label class="py-1" for="speie">Varietà</label>
          <InputText id="varieta" type="text" v-model="varieta" />
          <br>
          <label class="py-1" for="speie">Quantità</label>
          <InputText id="quantita" type="text" v-model="quantita" />
          <br>
          <button @click="submit">Submit</button>
        </div>
      </Dialog>
    </div>

    <div class="col-6">
      <PlantsList v-if="showPlantList" :plantVarieta="parentVarieta" :plantSpecie="parentSpecie"
        :plantQuantita="parentQuantita" @showDetails="processaRicezioneDaChild" />

      <PlantDetail v-else @showList="" />
    </div>
  </div>

</template>

<style scoped>
h2 {
  color: rebeccapurple;
}

.formContent {
  /* width: 50vh; */
  background-color: beige;
}

label {
  color: black;
}

button {
  background-color: pink;
  border: 2px solid palevioletred;
  border-radius: 5px;
  min-height: 30px;
}
</style>
