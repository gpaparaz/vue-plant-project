<script>
import AddPlant from '../components/AddPlant.vue';

export default {

  created() {
    this.emitter.on('showDetails', (value) => {
      console.log('homeview ha intercettato l evento ' + value.specie)
    })
  },

  setup() {

  },
  components: { AddPlant }
}

</script>

<template>
  <!-- <h1>This is home view page</h1> -->
  <div class="grid landing align-items-center">
    <h1>This is home view page</h1>

  </div>
  <AddPlant>
  </AddPlant>
</template>

<style scoped>
.landing {
  background-image: url('../assets/img/felce.jpg');
  height: 20vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
