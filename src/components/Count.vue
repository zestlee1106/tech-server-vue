<template>
  <div>
    <h1>Counter App</h1>
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
