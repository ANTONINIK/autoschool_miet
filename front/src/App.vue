<template>
  <div class="app">

    <router-view></router-view>

  </div>
</template>

<script>
import axios from "axios";
export default {

  async created() {
    if(localStorage.getItem("token") !== null)
    await axios.get("user", {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    }).then((response) => {
      this.$store.dispatch('user', response.data);
    });
  },
};
</script>

<style></style>
