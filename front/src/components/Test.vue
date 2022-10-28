<template>
  <section class="content">
    <TestBar :questionNumber="currentQuestionNumber" />
    <div id="touch-scroller">
      <button v-for="(question, indexButton) in questions" :key="indexButton"
        @click="currentQuestionIndex = indexButton" class="btn" :class="[
          { markedButton: markedButtons[indexButton] },
          { currentQuestionButton: currentQuestionIndex === indexButton },
        ]">
        {{ indexButton + 1 }}
      </button>
    </div>
    <div class="buttons-container">
      <div class="mark-question-container">
        <p>Вопрос №{{ currentQuestionNumber }}</p>
        <input type="button" class="btn" value="Отметить" @click="markButton" />
      </div>
      <input type="button" class="btn" value="Начать заново" @click="newTest" />
      <input type="button" class="btn" value="Завершить тест" @click="completeTest" />
    </div>
    <TestQuestion :question="currentQuestion" />
  </section>
</template>

<script>
import questionsData from "../assets/questionsData.json";
import TestBar from "./TestBar.vue";
import TestQuestion from "./TestQuestion.vue";

export default {
  name: "Test",
  data() {
    return {
      questions: [],
      currentQuestionIndex: 0,
      markedButtons: new Array(20).fill(false),
    };
  },
  created() {
    localStorage.removeItem("userResponses");
    if (localStorage.getItem("token") == null) {
      this.$router.push("/");
    }
    const numbersQuestions = new Array(questionsData.length)
      .fill(0)
      .map((item, i) => i);
    const result = [];
    while (result.length < 20) {
      let index = Math.floor(Math.random() * numbersQuestions.length);
      result.push(questionsData[numbersQuestions[index]]);
      if (index > -1) {
        numbersQuestions.splice(index, 1);
      }
    }
    this.questions = result;
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
      const userResponses = JSON.parse(localStorage.getItem("userResponses"));
      if (userResponses.length > 0) {
        let score = 0;
        userResponses.forEach((userResponse) => {
          if (userResponse.correct) score++;
        });
        localStorage.setItem("score", score);
        localStorage.setItem("date", new Date().toLocaleDateString("en-GB"));
        this.$router.push("/result");
      }
    },
    newTest() {
      localStorage.removeItem("userResponses");
      this.$router.go("/");
    },
    markButton() {
      this.markedButtons[this.currentQuestionIndex] =
        !this.markedButtons[this.currentQuestionIndex];
    },
  },
};
</script>
<style scoped></style>
p {
  margin-top: 0px;
  margin-bottom: 0px;
}

.content {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
  padding: 5rem 1rem;
}

.buttons-container {
  display: flex;
  justify-content: end;
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

.markedButton {
  border-color: #a52a2a;
}

.currentQuestionButton {
  background-color: #3b82f6;
  color:white;
}

@media(hover) {
  .btn:hover {
    border-color: rgb(117, 36, 215);
  }

  .currentQuestionButton:hover {
    border-color: rgb(117, 36, 215);
    background-color: #3b82f6;
    color:white;
  }
}
</style>
