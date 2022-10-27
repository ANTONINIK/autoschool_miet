<template>
  <div v-if="user">
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
      <div class="user-stats" v-if="user.results.length > 0">
        <h1 class="text-gray-800 font-bold text-xl mt-5 ml-72">
          Статистика прохождения тестов
        </h1>
        <div
          class="questions-progress-wrapper"
          v-for="(userResult, index) in user.results"
          :key="index"
        >
          <div class="remaining-time">
            <p>Дата: {{ userResult.date }}</p>
            <p style="margin-left: 70px">Время прохождения:</p>
            <div class="time-counter">{{ userResult.timeLeft }}</div>
          </div>
          <div class="answered">
            <p>Количество верных ответов:</p>
            <div class="counter">{{ userResult.score }} из 20</div>
          </div>
          <input
            type="button"
            class="btn"
            value="показать"
            @click="watchResult(userResult)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  async created() {
    if (localStorage.getItem("token") == null) this.$router.push("login");
    await axios
      .get("user", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.$store.dispatch("user", response.data);
      });
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    watchResult(userResult) {
      localStorage.setItem("score", userResult.score);
      localStorage.setItem(
        "userResponses",
        JSON.stringify(userResult.userResponse)
      );
      this.$router.push("/result");
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
}

.user-stats {
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}

.questions-progress-wrapper {
  width: 800px;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.remaining-time {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.time-counter {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.answered {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.counter {
  padding: 10px;
  width: 100px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin: 5px 20px;
}

.btn {
  border-color: #ac2838;
  border-style: solid;
  border-width: 2px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: start;
  margin: 5px;
  font: 400 16px system-ui;
}
</style>
