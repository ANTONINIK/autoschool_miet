<template>
  <div>
    <the-nav-bar />
    <h1 class="text-3xl font-bold underline h-screen">NEWS</h1>
    <the-footer />
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: "App",
  components: {
    TheFooter,
    TheNavBar,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
