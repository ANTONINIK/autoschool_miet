<template>
  <main class="test">
    <div class="test-wrapper">
      <div class="test-wrapper__info">
        <TestBar
          :questionNumber="currentQuestionNumber"
          :testLength="questions.length"
          :title="title"
        />
        <div class="test-wrapper__scroll">
          <button
            v-for="(question, indexButton) in questions"
            :key="indexButton"
            @click="currentQuestionIndex = indexButton"
            class="btn"
            :class="[
              { markedButton: markedButtons[indexButton] },
              { completedButton: completedButtons[indexButton] },
              { currentQuestionButton: currentQuestionIndex === indexButton },
            ]"
          >
            {{ indexButton + 1 }}
          </button>
        </div>
        <div class="buttons-container">
          <p>Вопрос №{{ currentQuestionNumber }}</p>
          <div class="mark-question-container">
            <input
              type="button"
              class="btn"
              value="Отметить"
              @click="markButton"
            />
          </div>
          <input
            type="button"
            class="btn"
            value="Начать заново"
            @click="newTest"
          />
          <input
            type="button"
            class="btn"
            value="Завершить тест"
            @click="completeTest"
          />
        </div>
      </div>
      <div class="test-wrapper__content">
        <TestQuestion
          :question="currentQuestion"
          @nextQuestion="nextQuestion"
        />
      </div>
    </div>
  </main>
</template>

<script>
import questionsData from "../assets/questionsData.json";
import TestBar from "./TestBar.vue";
import TestQuestion from "./TestQuestion.vue";

export default {
  name: "Test",
  data() {
    return {
      title: "Тест для категории B",
      questions: [],
      currentQuestionIndex: 0,
      markedButtons: new Array(20).fill(false),
      completedButtons: new Array(20).fill(false),
    };
  },
  created() {
    localStorage.removeItem("userResponses");
    if (localStorage.getItem("token") == null) {
      this.$router.push("/login");
    }
    let topic = JSON.parse(localStorage.getItem("topic"));
    if (topic) {
      topic.questions.forEach((question) => {
        question.topicId = topic.topicId;
      });
      this.questions = topic.questions;
      this.title = topic.name;
      document.title = this.title;
      localStorage.removeItem("topic");
    } else {
      const numbersTopics = new Array(questionsData.length)
        .fill(0)
        .map((item, i) => i);
      const topics = [];
      while (topics.length < 20) {
        const indexTopic = Math.floor(Math.random() * numbersTopics.length);
        topics.push(questionsData[numbersTopics[indexTopic]]);
        if (indexTopic > -1) {
          numbersTopics.splice(indexTopic, 1);
        }
      }
      const questionsPull = [];
      topics.forEach((topic) => {
        const indexQuestion = Math.floor(
          Math.random() * topic.questions.length
        );
        const question = topic.questions[indexQuestion];
        question.topicId = topic.topicId;
        questionsPull.push(question);
      });
      this.questions = questionsPull;
    }
  },
  components: { TestBar, TestQuestion },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    currentQuestionNumber() {
      return this.currentQuestionIndex + 1;
    },
  },
  methods: {
    completeTest() {
      const result = {
        userResponses: JSON.parse(localStorage.getItem("userResponses")),
        testLength: this.questions.length,
        date: new Date().toLocaleDateString("en-GB"),
      };
      if (result.userResponses && result.userResponses.length > 0) {
        localStorage.setItem("result", JSON.stringify(result));
        this.$router.push("/result");
      } else {
        this.$swal.fire({
          icon: "warning",
          title: "Предупреждение!",
          text: "Для завершения теста нужно ответить на все вопросы.",
          confirmButtonColor: "#7524D7",
        });
      }
    },
    nextQuestion() {
      this.completedButtons[this.currentQuestionIndex] = true;
      if (this.currentQuestionIndex < this.questions.length - 1)
        this.currentQuestionIndex = this.currentQuestionIndex + 1;
    },
    newTest() {
      this.$swal
        .fire({
          title: "Вы уверены?",
          text: "Вы хотите пройти тест с начала",
          icon: "warning",
          confirmButtonColor: "#7524D7",
          confirmButtonText: "Да, начнем сначала!",
        })
        .then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("userResponses");
            this.$router.go("/");
          }
        });
    },
    markButton() {
      this.markedButtons[this.currentQuestionIndex] =
        !this.markedButtons[this.currentQuestionIndex];
    },
  },
};
</script>
<style scoped>
p {
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
}

.test {
  padding: 3.5rem 1rem 10rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.test-wrapper {
  width: 60rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
}

.test-wrapper__info {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.test-wrapper__content {
  width: 100%;
}

.buttons-container {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 600px) {
  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
  }
}

.mark-question-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-container {
  margin: 10px;
}

.btn {
  border-color: #3b82f6;
  min-width: 25px;
  border-style: solid;
  border-width: 2px;
  padding: 1px 7px 2px;
  text-rendering: auto;
  color: initial;
  display: inline-block;
  text-align: center;
  margin: 4px;
  font-size: 13px;
}

.markedButton {
  border-color: #a52a2a;
}

.completedButton {
  background-color: rgba(116, 36, 215, 0.5);
}

.currentQuestionButton {
  background-color: #3b82f6;
  color: white;
}

@media (hover) {
  .btn:hover {
    border-color: rgb(117, 36, 215);
  }

  .currentQuestionButton:hover {
    border-color: rgb(117, 36, 215);
    background-color: #3b82f6;
    color: white;
  }
}
</style>
