<script>

import { DataGenerator } from '../objects/DataGenerator';
import { ref } from 'vue';
// import ProductService from './service/ProductService';


export default {
    setup() {
        // const listaDiPiante = require('../objects/DataGenerator')
        const data = new DataGenerator();
        const datiDaMostrare = ref(data.getListaDiPiante);


        return {
            datiDaMostrare
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
        <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
        </tr>
        <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
        </tr>
    </table>
</template>