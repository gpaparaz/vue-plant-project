<script>

import { ref, computed, watch } from 'vue';
import InputText from 'primevue/inputtext';
import { Plant } from '../objects/plant';
import { collectionData } from '../objects/datagenerator'

export default {
    props: {
        piantaInseritaInFormAddPlant: { type: Object }
    },

    emits: ['showDetails'],

    methods: {
        search() {
            notFilteredData = dataToShow.value;
            dataToShow.value = dataToShow.value.filter(val => val.specie.includes(searchedText.value));
        },

        reset() {
            dataToShow.value = notFilteredData;
        }
    },

    setup(props, context) {

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

        //prendi i campi nel row ed inviali al parent AddPlant
        function showPlantDetailPage(emitPianta) {
            context.emit('showDetails', emitPianta);
        }

        return {
            dataToShow, searchedText, showPlantDetailPage
        }

    }
}
</script>

<template>
    <div class="grid p-fluid">
        <div class="col-12 md:col-4">
            <div class="p-inputgroup flex">
                <InputText id="searchedText" placeholder="cerca" v-model="searchedText" />
                <button @click="search">Cerca</button> <button @click="reset">Reset</button>
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
                <button @click="showPlantDetailPage(slotProps.data)" type="button" icon="pi pi-search"
                    class="p-button-success" style="margin-right: .5em">Dettagli

                </button>
            </template>
        </Column>
    </DataTable>

</template>

<style scoped>
table {
    border-collapse: collapse;
}

table th {
    border-bottom: 1px solid palevioletred;
    background-color: pink;
    color: black;
}

table th,
td {
    padding: 1em;
    border-left: 1px solid palevioletred;
    border-right: 1px solid palevioletred;
}
</style>