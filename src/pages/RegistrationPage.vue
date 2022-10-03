<template>
  <div>
    <the-nav-bar />
    <the-footer />
  </div>
</template>

<script>
import TheNavBar from '@/components/TheNavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "App",
  components: {
    TheNavBar,
    TheFooter,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
