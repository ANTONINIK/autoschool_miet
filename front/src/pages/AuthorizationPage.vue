<template>
  <div class="bg-gray-50">
    <the-nav-bar />
    <login />
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheNavBar from '@/components/TheNavBar.vue';
import Login from '@/components/Login.vue';

export default {
  name: "App",
  components: {
    TheFooter,
    TheNavBar,
    Login,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
