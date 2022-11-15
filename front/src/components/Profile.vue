<template>
  <main class="user-profile" v-if="user">
    <div class="inform">
      <div class="inform__image">
        <img src="../assets/UsersImage/photo.jpg" />
      </div>
      <div class="inform__text">
        <h2>
          {{ user.nickname }}
        </h2>
        <p>{{ user.email }}</p>
      </div>
      <button
        class="save-result-button"
        v-if="saveResultActive"
        @click="savingChanges(index)"
      >
        <span>сохранить</span>
      </button>
    </div>
    <div class="stats" v-if="user && user.results.length > 0">
      <h4 class="stats__title">Статистика прохождения тестов</h4>
      <div
        class="stats__result result-scale"
        v-for="(userResult, index) in user.results"
        :key="index"
      >
        <p>Дата: {{ userResult.date }}</p>
        <p>Время прохождения: {{ userResult.timeLeft }}</p>
        <div class="result__counter">
          <p>Количество верных ответов:</p>
          <div class="counter__text">
            {{ userResult.score }} из
            {{ userResult.testLength }}
          </div>
        </div>
        <button class="watch-result-button" @click="watchResult(userResult)">
          <span>показать</span>
        </button>
        <button class="delete-result-button" @click="deleteResult(index)">
          <span>удалить</span>
        </button>
      </div>
    </div>
    <div class="crossbars-analysis" v-if="analytics.length">
      <h4 class="crossbars-analysis__title">Анализ ошибок по темам</h4>
      <div
        class="crossbars-analysis__bar-item"
        v-for="(topic, index) in analytics"
        :key="index"
      >
        <p class="bar-item__title">
          {{ topic.indexTopic + 1 }}.
          {{ questionsData[topic.indexTopic].name }}:
          {{ topic.correctCounter }}/{{ topic.questionsCounter }}
        </p>
        <div
          class="bar-item__progress"
          :style="`--width-bar: ${topic.rate}%`"
        ></div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import questionsData from "../assets/questionsData.json";
export default {
  name: "Profile",
  data() {
    return {
      questionsData,
      saveResultActive: false,
    };
  },
  mounted() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/login");
    } else {
      this.$store.dispatch("fetchUser", localStorage.getItem("token"));
    }
  },
  computed: {
    ...mapGetters(["user", "analytics"]),
  },
  methods: {
    watchResult(userResult) {
      localStorage.setItem("result", JSON.stringify(userResult));
      this.$router.push("/result");
    },
    deleteResult(index) {
      this.$store.commit("deleteUserResult", index);
      this.saveResultActive = true;
    },
    async savingChanges() {
      this.$store.commit("savingChanges");
    },
  },
};
</script>

<style scoped>
.user-profile {
  padding: 5.5rem 1rem 10rem 1rem;
  display: inline;
}

.inform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
}

.inform__image {
  width: 250px;
  margin-bottom: 1rem;
}

.inform__text {
  text-align: center;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: 10%;
  border: 3px solid #8f8f8f;
}

.stats {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.stats__title {
  margin: 20px;
}

.user-stats {
  padding-top: 20px;
  margin-left: 50px;
  display: flex;
}

.stats__result {
  max-width: 1500px;
  margin: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

p {
  margin: 0 20px 0 20px;
}

.result__counter {
  display: flex;
  align-items: center;
}

.counter__text {
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px 5px 10px;
  margin: 10px;
  min-width: 80px;
}

.watch-result-button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(59 130 246 / 500);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 10px;
}

.delete-result-button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(189, 68, 74);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 10px;
}

.save-result-button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(117, 36, 215);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 10px;
}

.save-result-button:hover {
  background-color: rgb(78, 24, 146);
}
.watch-result-button span,
.delete-result-button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.watch-result-button span:after,
.delete-result-button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.watch-result-button:hover span,
.delete-result-button:hover span {
  padding-right: 25px;
}

.watch-result-button:hover span:after,
.delete-result-button:hover span:after {
  opacity: 1;
  right: 0;
}

.result-scale {
  transition: 0.3s;
}

.result-scale:hover {
  transform: scale(1.015);
}

@media screen and (max-width: 750px) {
  .stats__result {
    padding: 20px;
    flex-direction: column;
  }

  p {
    margin-bottom: 10px;
  }

  .result__counter {
    flex-direction: column;
  }
}

.crossbars-analysis {
  max-width: 800px;
  display: block;
  margin: auto;
}

.crossbars-analysis__title {
  text-align: center;
  margin: 20px;
}

.crossbars-analysis__bar-item {
  margin-bottom: 30px;
}

.bar-item__progress {
  height: 10px;
  background: silver;
}

.bar-item__progress::before {
  content: "";
  display: block;
  width: var(--width-bar);
  height: 100%;
  background: rgb(0, 60, 150);
}
</style>
