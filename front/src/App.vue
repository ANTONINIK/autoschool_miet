<template>
  <div class="app">
    <div class="main" v-if="serverConnected">
      <the-nav-bar></the-nav-bar>
      <router-view />
      <the-footer></the-footer>
    </div>
    <the-404 v-else></the-404>
  </div>
</template>

<script>
import TheNavBar from "./components/TheNavBar.vue";
import TheFooter from "./components/TheFooter.vue";
import The404 from "./components/The404.vue";
export default {
  name: "App",
  data() {
    return {
      serverConnected: true,
    };
  },
  components: { TheNavBar, TheFooter, The404 },
  mounted() {
    if (localStorage.getItem("token") !== null) {
      this.$store
        .dispatch("fetchUser", localStorage.getItem("token"))
        .catch((error) => {
          console.log(error);
          this.serverConnected = false;
        });
    }
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&display=swap");
.main {
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
