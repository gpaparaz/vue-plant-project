<script>

import { ref, onMounted } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import PlantsList from '../views/PlantsList.vue'

export default {

  methods: {
    submit() {
      this.showDialog = false;

      //setto i valori inseriti nel form e che devo inviare a PlantList
      this.piantaInviataAPlantlist.specie = this.piantaPerDialog.specie;
      this.piantaInviataAPlantlist.varieta = this.piantaPerDialog.varieta;
      this.piantaInviataAPlantlist.quantita = this.piantaPerDialog.quantita;
      this.piantaInviataAPlantlist.img = this.piantaPerDialog.img

      // faccio pulizia dei miei input text perchè altrimenti quando riapro la dialog trovo gli stessi dati di prima
      this.piantaPerDialog.specie = null;
      this.piantaPerDialog.varieta = null;
      this.piantaPerDialog.quantita = null;
      this.piantaPerDialog.img = null;
    },

    openBasic() {
      this.showDialog = true;
    }
  },

  setup() {

    const showDialog = ref(false);

    const piantaPerDialog = ref({ specie: '', varieta: '', quantita: '', img: '' })

    const piantaInviataAPlantlist = ref({ specie: '', varieta: '', quantita: '', img: '' })

    return {
      showDialog,
      piantaPerDialog,
      piantaInviataAPlantlist
    }
  },

  components: { PlantsList }
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
        <div class="flex flex-column p-3 border-round-xl">
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
          <label class="py-1" for="speie">Link Immagine</label>
          <InputText id="quantita" type="text" v-model="piantaPerDialog.img" />
          <br>
          <Button label="Submit" @click="submit"></Button>
        </div>
      </Dialog>
    </div>

    <div class="col-6">
      <PlantsList :piantaInseritaInFormAddPlant="piantaInviataAPlantlist" />
    </div>
  </div>

</template>

<style scoped>
label {
  color: black;
}
</style>
