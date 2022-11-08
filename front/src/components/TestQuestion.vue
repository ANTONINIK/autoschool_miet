<template>
  <div class="test-container">
    <div class="image-frame" v-if="question.image === ''">
      <div class="question-text">
        <p>{{ question.textProblem }}</p>
      </div>
    </div>
    <div class="image-frame" v-else>
      <div class="question-text">
        <img :src="imgUrl" alt="" />
      </div>
      <p>{{ question.textProblem }}</p>
    </div>
    <div
      class="answers-container"
      v-for="(answer, index) in question.answers"
      :key="answer"
    >
      <TestQuestionAnswer
        :answer="answer"
        :index="index"
        :rightIndex="question.rightAnswerIndex"
        :selected="selectedAnswers[index]"
        @userResponse="userResponse"
      />
    </div>
  </div>
</template>

<script>
import TestQuestionAnswer from "./TestQuestionAnswer.vue";
export default {
  name: "TestQuestion",
  components: { TestQuestionAnswer },
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedAnswers: new Array(4).fill(false),
    };
  },
  mounted() {
    this.initSelectedAnswers();
  },
  watch: {
    question() {
      this.initSelectedAnswers();
    },
  },
  methods: {
    userResponse(userResponse) {
      this.selectedAnswers.fill(false);
      userResponse.indexQuestion = this.question.id;
      let userResponses = [];
      if (localStorage.getItem("userResponses")) {
        userResponses = JSON.parse(localStorage.getItem("userResponses"));
      }
      let result = userResponses.findIndex(function (element) {
        return element.indexQuestion === userResponse.indexQuestion;
      });
      if (result === -1) {
        userResponses.push(userResponse);
        setTimeout(() => {
          this.$emit("nextQuestion");
        }, 300);
      } else {
        userResponses[result] = userResponse;
      }
      this.selectedAnswers[userResponse.indexAnswer] = true;
      localStorage.setItem("userResponses", JSON.stringify(userResponses));
    },
    initSelectedAnswers() {
      this.selectedAnswers.fill(false);
      const userResponses = JSON.parse(localStorage.getItem("userResponses"));
      if (userResponses) {
        const ob = userResponses.find((userResponse) => {
          return userResponse.indexQuestion === this.question.id;
        });
        if (ob) this.selectedAnswers[ob.indexAnswer] = true;
      }
    },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/QuestionsImage/${this.question.image}`);
    },
  },
};
</script>

<style scoped>
.test-container {
  width: 800px;
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  font-weight: 400;
}

.question-text {
  height: 250px;
  border: 2px solid rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 10px;
  justify-content: center;
}
</style>
