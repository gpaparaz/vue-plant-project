<script>
import { ref } from 'vue'

export default {

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
    <button @click="backToPlantList">Back</button>
    <h3>Plant details</h3>

</template>