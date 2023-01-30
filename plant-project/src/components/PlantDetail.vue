<script>
import { ref, watch, computed } from 'vue'

export default {
    // props: { dettaglioChild: Object },

    props: ['specieDettaglio', 'varietaDettaglio'],

    emits: ['showList'],

    mounted() {
        // console.log('mounted - props che sto ricevendo: ' + this.specieDettaglio);
        // specie.value = this.specieDettaglio;
        this.costruisciPiantaRicevuta;
    },
    methods: {
        costruisciPiantaRicevuta() {
            if (this.specieDettaglio !== '' && this.specieDettaglio !== undefined) {
                this.specie = this.specieDettaglio;
            }
        }
    },

    setup(props, context) {

        // let piantaRicevuta = dettaglioChild;

        function backToPlantList() {
            context.emit('showList');
        }

        //dati da stampare a video
        let specie = '';
        let varieta;
        let quantita;
        let img;

        const piantaRicevuta = computed(() => {
            return props.specieDettaglio;
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