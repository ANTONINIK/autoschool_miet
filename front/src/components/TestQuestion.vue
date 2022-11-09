<template>
  <div class="content">
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
      :key="index"
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
      let userResponses = [];
      this.selectedAnswers.fill(false);
      userResponse.indexQuestion = this.question.id;
      userResponse.indexTopic = this.question.topicId - 1;
      if (localStorage.getItem("userResponses")) {
        userResponses = JSON.parse(localStorage.getItem("userResponses"));
        const result = userResponses.findIndex(function (uR) {
          return (
            uR.indexQuestion === userResponse.indexQuestion &&
            uR.indexTopic === userResponse.indexTopic
          );
        });
        if (result !== -1) {
          userResponses[result] = userResponse;
        }
      }
      userResponses.push(userResponse);
      this.selectedAnswers[userResponse.indexAnswer] = true;
      localStorage.setItem("userResponses", JSON.stringify(userResponses));
      setTimeout(() => {
        this.$emit("nextQuestion");
      }, 300);
    },
    initSelectedAnswers() {
      this.selectedAnswers.fill(false);
      const userResponses = JSON.parse(localStorage.getItem("userResponses"));
      if (userResponses) {
        const ob = userResponses.find((uR) => {
          return (
            uR.indexQuestion === this.question.id &&
            uR.indexTopic === this.question.indexTopic
          );
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
.content {
  display: flex;
  flex-direction: column;
  padding: 10px 0px 10px 0px;
  font-weight: 400;
  width: 100%;
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
