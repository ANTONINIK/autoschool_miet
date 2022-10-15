<template>
  <section class="content">
    <TestTimeBar :questionNumber="currentQuestionNumber" />

    <div id="touch-scroller">
      <button
        v-for="(question, indexButton) in questions"
        :key="indexButton"
        @click="currentQuestionIndex = indexButton"
        class="btn"
        :style="{
          'background-color':
            indexButton === currentQuestionIndex ? '#3B82F6' : '',
        }"
      >
        {{ indexButton + 1 }}
      </button>
    </div>

    <div class="buttons-container">
      <div class="mark-question-container">
        <p>Вопрос №{{ currentQuestionNumber }}</p>
        <input type="button" class="btn" value="Отметить" />
      </div>
      <input type="button" class="btn" value="Начать заново" @click = "newTest"/>
      <input type="button" class="btn" value="Завершить тест" @click = "completeTest"/>
    </div>
    <TestQuestion :question="currentQuestion" />
  </section>
</template>

<script>
import questionsData from "../assets/questionsData.json";
import TestTimeBar from "./TestTimeBar.vue";
import TestQuestion from "./TestQuestion.vue";

export default {
  name: "Test",
  data() {
    return {
      questions: questionsData,
      currentQuestionIndex: 0,
    };
  },
  created() {
    if(localStorage.getItem("token") == null) {
      this.$router.push("/");
    }
  },
  components: { TestTimeBar, TestQuestion },
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
      this.$router.push("/result");
    },
    newTest() {

    }
  },
};
</script>
<style scoped>
p {
  margin-top: 0px;
  margin-bottom: 0px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  justify-content: center;
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

.question-info {
  color: white;
  margin: 10px;
}

.btn-container {
  margin: 10px;
}

.btn {
  border-color: rgb(59 130 246 / 500);
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
</style>
