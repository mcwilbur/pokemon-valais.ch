<template>
  <div v-if="this.loaded_events.length > 0">
  <p v-for="(event, index) in this.loaded_events" :key="index">
    {{event}}
  </p>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      loaded_events : []
    }
  },
  mounted() {
  this.$nextTick(function () {

    this.loaded_events = window.page_events;
        console.log(this.loaded_events);
  })
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>