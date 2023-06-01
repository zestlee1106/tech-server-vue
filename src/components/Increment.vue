<template>
  <button @click="increment">Increment</button>
</template>

<script>
export default {
  name: "increment-button",
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
};
</script>
