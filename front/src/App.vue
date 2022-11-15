<template>
  <div class="app">
    <the-nav-bar></the-nav-bar>
    <router-view />
    <the-footer></the-footer>
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
export default {
  name: "App",
  components: { TheNavBar, TheFooter },
  async mounted() {
    if (localStorage.getItem("token") !== null) {
      this.$store.dispatch("fetchUser", localStorage.getItem("token"));
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&display=swap");
.app {
  font-family: "Noto Sans", sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: 100vh;
}
img {
  max-width: 100%;
}
</style>
