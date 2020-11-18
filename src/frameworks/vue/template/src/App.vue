<template>
  <div id="app">
    <site-navigation :navigation="navLinks" />
    <img alt="Vue logo" src="./assets/img/fpo-test.png">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      pageHeader: 'Fusion Alliance Starter Kit',
      navLinks: [
        {
          to: '/',
          text: 'Home',
        },
      ],
    };
  },
  mounted() {

  },
  methods: {
    log(str) {
      console.log(str);
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
