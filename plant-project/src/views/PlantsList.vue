<script>

import { ref, watch } from 'vue';
import InputText from 'primevue/inputtext';
import { Plant } from '../objects/plant';
import { collectionData } from '../objects/datagenerator'

export default {
    props: {
        piantaInseritaInFormAddPlant: { type: Object }
    },

    methods: {
        search() {
            this.notFilteredData = this.dataToShow;
            this.dataToShow = this.dataToShow.filter(val => val.specie.includes(searchedText.value));
        },

        reset() {
            this.dataToShow = this.notFilteredData;
        },

        //prendi i campi nel row ed inviali al parent AddPlant
        showPlantDetailPage(emitPianta) {
            this.emitter.emit('showDetails', emitPianta);
        }
    },

    setup(props) {

        const searchedText = ref('')

        let notFilteredData = []

        let dataToShow = ref(collectionData);

        watch(props, (newValue) => {
            if (newValue.piantaInseritaInFormAddPlant.specie !== '') {
                let id = dataToShow.value.length;
                dataToShow.value.push(new Plant(id, props.piantaInseritaInFormAddPlant.specie, props.piantaInseritaInFormAddPlant.varieta, props.piantaInseritaInFormAddPlant.quantita, props.piantaInseritaInFormAddPlant.img));
                notFilteredData = dataToShow;
            }
        })

        return {
            dataToShow, searchedText
        }

    }
}
</script>

<template>
    <div class="grid">
        <div class="w-full">
            <div class="flex flex-row ">
                <InputText id="searchedText" placeholder="cerca" v-model="searchedText" />
                <Button class="mx-2" icon="pi pi-search" label="Cerca" @click="search"></Button>
                <Button class="mx-2 p-button-outlined" label="Reset" @click="reset"></Button>
            </div>
        </div>
    </div>

    <p>Lista piante presenti a database: </p>

    <DataTable :value="dataToShow" responsiveLayout="scroll">
        <Column field="specie" header="Specie"></Column>
        <Column field="varieta" header="Varietà"></Column>
        <Column field="quantita" header="Quantità"></Column>
        <Column header="Azione">
            <template #body="slotProps">
                <Button @click="showPlantDetailPage(slotProps.data)" type="button" label="Dettagli"></Button>
            </template>
        </Column>
    </DataTable>

</template>

<style scoped>

</style>