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
      :key="index"
    >
      <TestQuestionAnswer
        :answer="answer"
        :index="index"
        :rightIndex="question.rightAnswerIndex"
        :questionIndex="question.id"
        @userResponse = "userResponse"
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
  methods: {
    userResponse(indexAnswer){
      console.log("testAnton")
        if(!localStorage.getItem(this.question.id))
            localStorage.setItem(this.question.id, indexAnswer);
    },
  },
  computed: {
    imgUrl() {
      return require(`@/assets/img/${this.question.image}`);
    },
  },
};
</script>

<style>
.test-container {
  width: 600px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.image-frame {
  background-color: white;
}

.question-text {
  height: 400px;
  border: 2px solid rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding-left: 10px;
}

.answers-container {
  background-color: #c2b9b0;
}
</style>
