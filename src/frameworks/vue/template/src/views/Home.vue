<template>
  <hello-world :msg="pageMsg" />
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      pageMsg: 'Home page - Hello world'
    };
  },
};
</script>
