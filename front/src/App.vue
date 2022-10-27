<template>
  <div class="app">
    <the-nav-bar></the-nav-bar>
    <router-view></router-view>
    <the-footer></the-footer>
  </div>
</template>

<script>
import axios from "axios";
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: { TheNavBar, TheFooter },
  async created() {
    if (localStorage.getItem("token") !== null)
      await axios
        .get("user", {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.$store.dispatch("user", response.data);
        });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&display=swap");
.app {
  font-family: "Noto Sans", sans-serif;
}
img {
  max-width: 100%;
  height: auto;
}
</style>
