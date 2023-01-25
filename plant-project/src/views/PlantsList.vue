<script>

import { ref, computed } from 'vue';
let id = 0;

export default {
    props: ['plantVarieta', 'plantSpecie', 'plantQuantita'],

    setup(props) {

        const dataToShow = ref([
            {
                id: id++, specie: 'Magnolia', varieta: 'Bianca', quantita: 3
            },
            {
                id: id++, specie: 'Glicine', varieta: 'Rosa', quantita: 2
            },
            {
                id: id++, specie: 'Glicine', varieta: 'Viola', quantita: 4
            },
            {
                id: id++, specie: 'Edera', varieta: 'Canadese', quantita: 2
            }
        ])

        const fullPlant = computed(() => {
            if (props.plantSpecie !== '') {
                dataToShow.value.push({ id: id++, specie: props.plantSpecie, varieta: props.plantVarieta, quantita: props.plantQuantita });
            }
            return props.plantSpecie + ' ' + props.plantVarieta + ' ' + props.plantQuantita;
        })

        return {
            dataToShow, fullPlant
        }
    }
}
</script>

<template>
    <table>
        <tr>
            <th>Specie</th>
            <th>Varietà</th>
            <th>Quantità</th>
        </tr>
        <template v-for="item in dataToShow">
            <tr>
                <td>{{ item.specie }}</td>
                <td>{{ item.varieta }}</td>
                <td>{{ item.quantita }}</td>
            </tr>
        </template>
    </table>

    <p class="hidden">Pianta inserita: {{ fullPlant }}</p>
</template>

<style scoped>
table {
    border-collapse: collapse;
}

table th {
    border-bottom: 1px solid pink;
    background-color: bisque;
    color: black;
}

table th,
td {
    padding: 1em;
    border-left: 1px solid pink;
    border-right: 1px solid pink;
}
</style>