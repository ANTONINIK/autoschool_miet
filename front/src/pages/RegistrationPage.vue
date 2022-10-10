<template>
  <div>
    <the-nav-bar />
    <register />
    <the-footer />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';
import Register from '../components/Register.vue';

export default {
  name: "App",
  components: {
    TheNavBar,
    TheFooter,
    Register,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
