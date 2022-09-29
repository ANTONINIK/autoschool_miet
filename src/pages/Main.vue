<template>
    <div>
        <Navbar/>
        <h1 class="text-3xl font-bold underline">
            Hello world!
        </h1>
        <Footer/>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap');
</style>