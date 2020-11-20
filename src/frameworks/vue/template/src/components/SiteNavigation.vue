<template>
  <header>
    <router-link
      v-for="(navItem, idx) in navigation"
      :key="idx"
      :to="navItem.to"
    >
      {{ navItem.text }}
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'SiteNavigation',
  props: {
    navigation: Object,
  },
};
</script>

<style lang="scss">
  header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    padding: 1rem;
    border-bottom: 1px solid;
  }
</style>
