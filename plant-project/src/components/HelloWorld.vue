<script>

import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import PlantsList from '../views/PlantsList.vue'

export default {
  components: [PlantsList],
  setup() {
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
      // console.log("specie " + specie.value + " varietà " + varieta.value)
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
      parentVarieta
    };
  },
  components: { PlantsList }
}

</script>

<template>
  <h2>This is hello world vue page</h2>

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
      <p>pianta inserita</p>
      <PlantsList :plantVarieta="parentVarieta" :plantSpecie="parentSpecie" :plantQuantita="parentQuantita" />
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
