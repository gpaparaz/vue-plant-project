<script>
import { ref, watch, computed } from 'vue'

export default {

    props: {
        piantaRicevutaDaAddPlant: { type: Object }
    },

    emits: ['showList'],

    mounted() {
        this.costruisciPiantaRicevuta;
    },
    methods: {
        costruisciPiantaRicevuta() {
            if (this.piantaRicevutaDaAddPlant !== '' && this.piantaRicevutaDaAddPlant !== undefined) {
                this.specie = this.piantaRicevutaDaAddPlant.specie;
            }
        }
    },

    setup(props, context) {

        function backToPlantList() {
            context.emit('showList');
        }

        //dati da stampare a video
        let specie = '';
        let varieta;
        let quantita;
        let img;

        const piantaRicevuta = computed(() => {
            return props.piantaRicevutaDaAddPlant.specie + ' ' + props.piantaRicevutaDaAddPlant.varieta;
        })

        return {
            backToPlantList, piantaRicevuta, specie
        }
    }
}
</script>

<template>
    <button @click="backToPlantList">Back</button>
    <h3>Plant details</h3>
    <p>Specie arrivata: {{ piantaRicevuta }}</p>

</template>