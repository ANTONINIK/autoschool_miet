<template>
<div>
  <Navbar/>
  <Test/>
  <Footer/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Test from '@/components/Test';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Test,
    Footer,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap');
</style>
