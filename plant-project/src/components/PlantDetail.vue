<script>
import { ref, watch, computed } from 'vue'

export default {

    props: {
        piantaRicevutaDaAddPlant: { type: Object }
    },

    computed: {
        piantaRicevuta() {
            return props.piantaRicevutaDaAddPlant;
        }
    },

    methods: {
        backToPlantList() {
            context.emit('showList');
        }
    },

    emits: ['showList'],

    setup(props, context) {

        function backToPlantList() {
            context.emit('showList');
        }

        return {
            backToPlantList
        }
    }
}
</script>

<template>
    <Button label="Back" @click="backToPlantList"></Button>
    <h2>Plant details</h2>
    <h3>Scheda tecnica:</h3>
    <div>
        <img :src="piantaRicevutaDaAddPlant.img" class="pb-2" />
        <div class="grid">
            <div class="col-6"><span class="col-sx">Specie: </span></div>
            <div class="col-6"><span>{{ piantaRicevutaDaAddPlant.specie }}</span></div>

            <div class="col-6"><span class="col-sx">Varietà: </span></div>
            <div class="col-6"><span>{{ piantaRicevutaDaAddPlant.varieta }}</span></div>

            <div class="col-6"><span class="col-sx">Quantità: </span></div>
            <div class="col-6"><span>{{ piantaRicevutaDaAddPlant.quantita }}</span></div>
        </div>
    </div>

</template>

<style>
img {
    width: 400px;
    height: auto;
}

.col-sx {
    font-weight: bold;
}
</style>