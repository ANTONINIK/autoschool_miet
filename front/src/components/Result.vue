<template>
  <main class="result">
    <div class="result__content">
      <h2>Тест завершен</h2>
      <h4>Вы набрали {{ score }} из {{ testLength }}</h4>
      <ol class="content__list" v-if="userResponses">
        <li
          v-for="(userResponse, indexQ) in userResponses"
          :key="indexQ"
          class="list__question"
          :class="[
            userResponse.correct
              ? 'list__question-right'
              : 'list__question-wrong',
          ]"
        >
          <div class="question__text">
            <span class="question__number">
              {{ indexQ + 1 }}
            </span>
            <div>
              {{
                questionsData[userResponse.indexTopic].questions[
                  userResponse.indexQuestion
                ].textProblem
              }}
            </div>
          </div>
          <div class="question__answers-list">
            <div
              v-for="(answer, indexA) in questionsData[userResponse.indexTopic]
                .questions[userResponse.indexQuestion].answers"
              :key="indexA"
              class="answers-list__item"
              :class="{
                answers_list__item_wrong:
                  indexA === userResponses[indexQ].indexAnswer,
                answers_list__item_right:
                  indexA ===
                  questionsData[userResponse.indexTopic].questions[
                    userResponse.indexQuestion
                  ].rightAnswerIndex,
              }"
            >
              <span class="item__letter">{{
                String.fromCharCode(65 + indexA)
              }}</span>
              <div class="item__text">
                {{ answer }}
              </div>
            </div>
          </div>
          <div
            class="question__image"
            v-if="
              questionsData[userResponse.indexTopic].questions[
                userResponse.indexQuestion
              ].image !== ''
            "
          >
            <img
              class="image-title"
              :src="
                imgUrl(
                  questionsData[userResponse.indexTopic].questions[
                    userResponse.indexQuestion
                  ].image
                )
              "
              alt=""
            />
          </div>
          <div class="question__comment">
            <h5>Объяснение:</h5>
            {{
              questionsData[userResponse.indexTopic].questions[
                userResponse.indexQuestion
              ].comment
            }}
          </div>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
import questionsData from "../assets/questionsData.json";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Result",
  data() {
    return {
      questionsData,
      userResponses: [],
      score: 0,
      timeLeft: 0,
      testLength: 0,
      showUserAnswer: new Array(3),
    };
  },
  mounted() {
    document.title = "Результаты";
    const result = JSON.parse(localStorage.getItem("result"));
    if (result) {
      this.userResponses = result.userResponses;
      this.score = this.calculateScore();
      this.timeLeft = localStorage.getItem("timeLeft");
      this.testLength = result.testLength;
      result.score = this.score;
      result.timeLeft = this.timeLeft;
      result.token = localStorage.getItem("token");
      this.showUserAnswer.fill(false);
      if (localStorage.getItem("timeLeft")) {
        axios.post("addResult", {
          result: result,
        });
      }
      localStorage.removeItem("result");
      localStorage.removeItem("timeLeft");
    } else this.$router.push("/test");
  },
  methods: {
    calculateScore() {
      let score = 0;
      this.userResponses.forEach((userResponse) => {
        if (userResponse.correct) score++;
      });
      return score;
    },
    imgUrl(src) {
      return require(`@/assets/QuestionsImage/${src}`);
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.result {
  padding: 5rem 1rem;
}

.result__content {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.content__list {
  padding: 0px;
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0, 0.25);
  max-width: 80%;
}

@media only screen and (max-width: 1050px) {
  .content__list {
    max-width: 100%;
  }
}

.list__question {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
}

.list__question-wrong {
  border: 2px solid rgb(189, 68, 74);
}
.list__question-right {
  border: 2px solid rgb(68, 189, 74);
}

.question__number {
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid rgb(59 130 246 / 500);
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-right: 20px;
}

.question__text {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.question__image {
  display: flex;
  justify-content: center;
  padding: 0.5em;
}
.image-title {
  outline: 2px solid #818181;
}

.question__answers-list {
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.answers-list__item {
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 0.5em;
  border-bottom: 1px solid rgb(0, 0, 0, 0.25);
}

.answers_list__item_wrong {
  background-color: rgb(189, 68, 74);
}

.answers_list__item_right {
  background-color: rgb(68, 189, 74);
}

.item__letter {
  min-width: 35px;
  max-width: 35px;
  min-height: 35px;
  max-height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid rgb(59 130 246 / 500);
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0px 10px;
}
</style>
