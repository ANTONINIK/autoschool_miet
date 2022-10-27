<template>
  <section class="result">
    <div class="result-list">
      <h2>Тест завершен</h2>
      <h4>Вы набрали {{ score }} из 20</h4>
      <ol v-if="userResponses">
        <li
          v-for="(userResponse, index) in userResponses"
          :key="index"
          :class="[userResponse.correct ? 'right' : 'wrong']"
        >
          <span>
            {{ index + 1 }}
          </span>
          <div class="question-text">
            <p>{{ questionsData[userResponse.indexQuestion].textProblem }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import questionsData from "../assets/questionsData.json";
import { mapGetters } from "vuex";
export default {
  name: "Result",
  data() {
    return {
      score: 0,
      timeLeft: 0,
      userResponses: [],
      questionsData,
    };
  },
  async mounted() {
    if (localStorage.getItem("score") === null) {
      this.$router.push("/test");
    } else {
      this.score = localStorage.getItem("score");
      this.timeLeft = localStorage.getItem("timeLeft");
      this.userResponses = JSON.parse(localStorage.getItem("userResponses"));

      if (this.timeLeft) {
        await axios.post("addResult", {
          date: localStorage.getItem("date"),
          token: localStorage.getItem("token"),
          score: this.score,
          timeLeft: this.timeLeft,
          userResponse: this.userResponses,
        });
      }

      localStorage.removeItem("score");
      localStorage.removeItem("timeLeft");
      localStorage.removeItem("userResponses");
    }
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
ol {
  width: 120vh;
}

li {
  display: flex;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
}

span {
  min-width: 35px;
  max-width: 35px;
  min-height: 35px;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(59 130 246 / 500);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 20px;
}

.result {
  padding: 20px;
}

.result-list {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.question-text {
  display: flex;
  flex-direction: column;
}

.question-image {
  width: 50%;
  height: 50%;
}

.right {
  border: 2px solid rgb(68, 189, 74);
}

.wrong {
  border: 2px solid rgb(189, 68, 74);
}
</style>
