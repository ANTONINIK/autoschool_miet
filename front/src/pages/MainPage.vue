<template>
  <div>
    <the-nav-bar />
    <div> {{user}}</div>
    <the-footer />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import TheFooter from '@/components/TheFooter.vue';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: "Mainpage",
  components: {
    TheFooter,
    TheNavBar,
  },
   computed: {
    ...mapGetters(['user'])
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
