<template>
  <button @click="increment">Decrement</button>
</template>

<script>
export default {
  name: "decrement-button",
  methods: {
    decrement() {
      this.$store.commit("decrement");
    },
  },
};
</script>
