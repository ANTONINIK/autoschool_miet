<template>
  <div>
    <the-nav-bar />
    <div class="container">
      <div id="about_user" class="bg-zinc-300 w-1/3 rounded-lg h-screen">
        <div class="flex items-center justify-center pt-5 flex-col">
          <img
            v-bind:src="require('../assets/UsersImage/photo.jpg')"
            class="rounded-full w-32"
          />
          <h1 class="text-gray-800 font-bold text-xl mt-2">
            {{ user.nickname }}
          </h1>
          <h1 class="text-gray-500 ftext-sm">{{ user.email }}</h1>
        </div>
      </div>
      <div>
        <h1 class="text-gray-800 font-bold text-xl mt-5 ml-72">
          Статистика прохождения тестов
        </h1>
        <div class="questions-progress-wrapper">
          <div class="remaining-time">
            <p>02.09.2022</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">29:45</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">15 из 20</div>
          </div>
          <div class="watch">показать</div>
        </div>

        <div class="questions-progress-wrapper">
          <div class="remaining-time">
            <p>02.09.2022</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">29:45</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">15 из 20</div>
          </div>
          <div class="watch">показать</div>
        </div>

        <div class="questions-progress-wrapper">
          <div class="remaining-time">
            <p>02.09.2022</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">29:45</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">15 из 20</div>
          </div>
          <div class="watch">показать</div>
        </div>

        <div class="questions-progress-wrapper">
          <div class="remaining-time">
            <p>02.09.2022</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">28:45</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">15 из 20</div>
          </div>
          <div class="watch">показать</div>
        </div>

        <div class="questions-progress-wrapper">
          <div class="remaining-time">
            <p>02.09.2022</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">28:45</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">15 из 20</div>
          </div>
          <div class="watch">показать</div>
        </div>
      </div>
    </div>
    <the-footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
.btn {
  border-color: rgb(218, 44, 44) rgb(209, 209, 209) rgb(186, 186, 186);
  border-style: solid;
  border-width: 2px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: start;
  margin: 5px;
  font: 400 11px system-ui;
}
.container {
  display: inline-flex;
}

.questions-progress-wrapper {
  width: 100%;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  background-color: antiquewhite;
  border-radius: 10px;
}

.remaining-time {
  font-weight: 500;
  margin: 0px 20px;
  display: flex;
  align-items: center;
}

.time-counter {
  font-weight: 500;
  margin: 0px 5px;
  display: flex;
  align-items: center;
}

.answered {
  font-weight: 500;
  margin: 0px 20px;
  display: flex;
  align-items: center;
}

.counter {
  padding: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin: 5px 20px;
}
.watch {
  padding: 1px;
  border-radius: 6px;
  font-weight: 400;
  display: flex;
  align-items: center;
  margin: 5px 20px;
  color: deepskyblue;
}

/* .touch-scroller, .about_user
{
    display:inline;
} */
</style>
