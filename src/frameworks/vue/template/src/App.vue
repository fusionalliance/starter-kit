<template>
  <div id="app">
    <h1>{{ pageHeader }}</h1>
    <img alt="Vue logo" src="./assets/img/fpo-test.png">
    <router-view />
  </div>
</template>

<script>
import { EventBus } from './util/EventBus.js';

export default {
  name: 'App',
  data() {
    return {
      pageHeader: 'Fusion Alliance Starter Kit'
    };
  },
  mounted() {
    window.EventBus = EventBus;

    EventBus.$on('do:something', obj => {
      this.log(`EVENT: do:something: ${obj.value}`)
    });

    EventBus.$emit('do:something', { value: true });
  },
  methods: {
    log(str) {
      console.log(str);
    },
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
