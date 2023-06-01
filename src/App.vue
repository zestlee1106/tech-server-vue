<template>
  <div>
    <Count />
    <Increment />
    <Decrement />
  </div>
</template>

<script>
import Count from "./components/Count.vue";
import Increment from "./components/Increment.vue";
import Decrement from "./components/Decrement.vue";

export default {
  name: "App",
  components: {
    Count,
    Increment,
    Decrement,
  },
};
</script>
