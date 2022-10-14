<template>
  <div class="h-screen">
    <h3>{{ user.nickname }}, вы набрали {{ score }} из 20</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Result",
  data() {
    return {
      score: null,
    };
  },
  created() {},
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style></style>
