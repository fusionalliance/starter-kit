<template>
  <hello-world :msg="pageMsg" />
</template>

<script>

export default {
  name: 'Home',
  ata() {
    return {
      pageMsg: 'Home page - Hello world'
    };
  },
};
</script>
