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
        let specie = ref('');
        let varieta = ref('');
        let quantita = ref('');
        let img = ref('');

        const piantaRicevuta = computed(() => {
            specie.value = props.piantaRicevutaDaAddPlant.specie;
            varieta.value = props.piantaRicevutaDaAddPlant.varieta;
            quantita.value = props.piantaRicevutaDaAddPlant.quantita;
            img.value = props.piantaRicevutaDaAddPlant.img;
            return props.piantaRicevutaDaAddPlant.specie + ' ' + props.piantaRicevutaDaAddPlant.varieta;
        })

        return {
            backToPlantList, piantaRicevuta, specie, varieta, quantita, img
        }
    }
}
</script>

<template>
    <button @click="backToPlantList">Back</button>
    <h3>Plant details</h3>
    <p>Specie arrivata: {{ piantaRicevuta }}</p>
    <h3>Scheda tecnica:</h3>
    <div>
        <img :src="img" />
    </div>

</template>