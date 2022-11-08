<template>
  <div
    @mouseover="active = true"
    @mouseleave="active = false"
    @click="checkAnswer()"
    :class="{ active: active, selected: selected }"
    class="answer"
  >
    <span class="answer-letter">{{ String.fromCharCode(65 + index) }}</span>
    <div class="answer-text">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestQuestionAnswer",
  data() {
    return {
      active: false,
    };
  },
  props: {
    answer: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    rightIndex: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    checkAnswer() {
      const userResponse = {
        indexAnswer: this.index,
        correct: null,
      };
      if (this.index === this.rightIndex) userResponse.correct = true;
      else userResponse.correct = false;
      this.$emit("userResponse", userResponse);
    },
  },
};
</script>
<style scoped>
.answer {
  display: flex;
  padding: 5px 0px;
  transition: background-color 0.25s;
  border-bottom: 1px solid rgb(0, 0, 0, 0.25);
  background: #ffffff;
  cursor: pointer;
}

.answer-letter {
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: 2px solid rgb(59 130 246 / 500);
  border-radius: 4px;
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 0px 5px;
}

.answer-text {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  color: #ffffff;
  user-select: none;
}

p {
  font-weight: 500;
  margin: 10px;
  color: rgb(0, 0, 0);
}

.active {
  background: #d3d3d3;
}

.selected {
  background: #7b7b7b;
}
</style>
