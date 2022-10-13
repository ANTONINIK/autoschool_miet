<template>
  <div>
    <the-nav-bar />
    <h1 class="text-3xl font-bold underline">NEWS</h1>
    <section id="about">
      <div class="container mx-auto px-5 py-2">
        <div class="flex justify-between mt-20 mb-20">
          <div class="flex flex-col w-1/2">
            <div class="text-darked font-bold text-4xl tracking-right">
              Заголовок
            </div>
            <h3 class="text-xl font-black mt-[2px]">
            Небольшое описание  
            </h3>
            <p class="mt-[10px] text-lg">Инофрмация о нас и нашей компании Инофрмация о нас и нашей компании Инофрмация о нас и нашей компании Инофрмация о нас и нашей компании
            </p>
          </div>
          <div class="flex flex-col w-[450px]">
            <img src="../assets/img/10.jpg" alt="about">
          </div>
        </div>
      </div>
    </section>
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
