<script>

import { ref } from 'vue'
import { Plant } from '../objects/plant'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'

export default {
  setup() {

    function openForm() {
      console.log('form aperto')
    }

    const display = ref(false)

    const openBasic = () => {
      display.value = true;
    };

    const pianta = new Plant();
    const specie = ref('')
    const varieta = ref('')
    const quantita = ref('')

    function submit() {
      pianta.setSpecie(specie.value);
      pianta.setVarieta(varieta.value);
      pianta.setQuantita(quantita.value);

      context.emit('closeDialog');
    }


    return {
      openForm,
      display,
      openBasic,
      submit,
      specie, varieta, quantita
    }
  }

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
        <div class="formContent">
          <InputText id="specie" type="text" v-model="specie" placeholder="Specie" />
          <br>
          <button @click="submit">Submit</button>
        </div>
      </Dialog>
    </div>

    <div class="col-6">
      <p>pianta inserita</p>
    </div>
  </div>

</template>

<style scoped>
.formContent {
  /* width: 50vh; */
  background-color: beige;
  padding: 4em;
}
</style>
