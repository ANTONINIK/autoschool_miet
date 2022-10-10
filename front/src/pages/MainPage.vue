<template>
  <div>
    <the-nav-bar />
    <h1 class="text-3xl font-bold underline h-screen">NEWS</h1>
    <h3 v-if="user">Hi, {{user}}</h3>
    <the-footer />
  </div>
</template>

<script>
import axios from 'axios'
import TheFooter from '@/components/TheFooter.vue';
import TheNavBar from '@/components/TheNavBar.vue';

export default {
  name: "App",
  components: {
    TheFooter,
    TheNavBar,
  },

  data() {
    return {
      user: null,
    }
  },

  async created() {
    const response = await axios.get('user');

    this.user = response.data;
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap");
</style>
