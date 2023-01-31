<script>

import { ref, onMounted } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import PlantsList from '../views/PlantsList.vue'
import PlantDetail from './PlantDetail.vue'

export default {

  created() {
    this.emitter.on('showDetails', (value) => {
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
    },

    submit() {
      this.showDialog = false;

      //setto i valori inseriti nel form e che devo inviare a PlantList
      this.piantaInviataAPlantlist.specie = this.piantaPerDialog.specie;
      this.piantaInviataAPlantlist.varieta = this.piantaPerDialog.varieta;
      this.piantaInviataAPlantlist.quantita = this.piantaPerDialog.quantita;

      // faccio pulizia dei miei input text perchè altrimenti quando riapro la dialog trovo gli stessi dati di prima
      this.piantaPerDialog.specie = null;
      this.piantaPerDialog.varieta = null;
      this.piantaPerDialog.quantita = null;
    },

    openBasic() {
      this.showDialog = true;
    }
  },

  setup() {

    const showDialog = ref(false);

    const piantaPerDialog = ref({ specie: '', varieta: '', quantita: '', img: '' });

    const piantaInviataAPlantlist = ref({ specie: '', varieta: '', quantita: '', img: '' });

    const piantaInviataAPlantDetail = ref({ specie: '', varieta: '', quantita: '', img: '' });

    const showPlantList = ref(true)

    return {
      showDialog,
      piantaPerDialog,
      piantaInviataAPlantlist,
      showPlantList,
      piantaInviataAPlantDetail
    }
  },

  components: { PlantsList, PlantDetail }
}

</script>

<template>
  <h2>This is AddPlant vue page</h2>

  <div class="grid mx-3">
    <div class="col-4">
      <p>Add plant:</p>

      <Button label="Apri form" icon="pi pi-external-link" @click="openBasic"></Button>


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
          <Button label="Submit" @click="submit"></Button>
        </div>
      </Dialog>
    </div>

    <div class="col-6">
      <PlantsList v-if="showPlantList" :piantaInseritaInFormAddPlant="piantaInviataAPlantlist" />

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
