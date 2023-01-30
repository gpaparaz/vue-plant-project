<script>

import { ref, computed, watch } from 'vue';
import InputText from 'primevue/inputtext';
import { Plant } from '../objects/plant';

let id = 0;

export default {
    props: ['plantVarieta', 'plantSpecie', 'plantQuantita'],

    emits: ['showDetails'],

    setup(props, context) {

        const searchedText = ref('')

        let notFilteredData = []

        let dataToShow = ref([
            new Plant(id++, 'Magnolia', 'Bianca', 3),
            new Plant(id++, 'Glicine', 'Rosa', 2),
            new Plant(id++, 'Glicine', 'Viola', 4),
            new Plant(id++, 'Edera', 'Canadese', 2)
        ])

        watch(props, (newValue) => {
            if (newValue.plantSpecie !== '') {
                // dataToShow.value.push({ id: id++, specie: props.plantSpecie, varieta: props.plantVarieta, quantita: props.plantQuantita });
                dataToShow.value.push(new Plant(id++, props.plantSpecie, props.plantVarieta, props.plantQuantita));
                notFilteredData = dataToShow;
            }
        })

        function search() {
            notFilteredData = dataToShow.value;
            dataToShow.value = dataToShow.value.filter(val => val.specie.includes(searchedText.value));
        }

        function reset() {
            dataToShow.value = notFilteredData;
        }

        //prendi i campi nel row ed inviali al parent AddPlant
        function showPlantDetailPage(emitSpecie, emitVarieta) {
            context.emit('showDetails', emitSpecie, emitVarieta);
        }

        return {
            dataToShow, searchedText, search, reset, showPlantDetailPage
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
    <table>
        <tr>
            <th>Specie</th>
            <th>Varietà</th>
            <th>Quantità</th>
            <th>Azione</th>
        </tr>
        <template v-for="item in dataToShow">
            <tr>
                <td>{{ item.specie }}</td>
                <td>{{ item.varieta }}</td>
                <td>{{ item.quantita }}</td>
                <td><button @click="showPlantDetailPage(item.specie, item.varieta)">Dettagli</button></td>
            </tr>
        </template>
    </table>

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