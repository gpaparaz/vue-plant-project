<script>

import { ref } from 'vue';

export default {
    setup() {

        const dataToShow = [
            {
                id: 0, specie: 'Magnolia', varieta: 'Bianca', quantita: 3
            },
            {
                id: 1, specie: 'Glicine', varieta: 'Rosa', quantita: 2
            },
            {
                id: 2, specie: 'Glicine', varieta: 'Viola', quantita: 4
            },
            {
                id: 3, specie: 'Edera', varieta: 'Canadese', quantita: 2
            }
        ]
        const show = ref(dataToShow)


        return {
            show
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
        <template v-for="item in show">
            <tr>
                <td>{{ item.specie }}</td>
                <td>{{ item.varieta }}</td>
                <td>{{ item.quantita }}</td>
            </tr>


        </template>
    </table>
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