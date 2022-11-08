<template>
  <div class="questions-progress">
    <div class="questions-progress-wrapper">
      <div class="test-title">
        <p>{{ title }}</p>
      </div>
      <div class="answered">
        <p>Количество вопросов:</p>
        <div class="counter">{{ questionNumber }} из {{ testLength }}</div>
        <div class="remaining-time">
          <p>Осталось времени:</p>
          <timer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from "./TestBarTimer.vue";
export default {
  components: { Timer },
  name: "TestBar",
  props: {
    questionNumber: {
      type: Number,
      required: true,
    },
    testLength: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.startTimer();
  },
  methods: {
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>
<style scoped>
p {
  margin: 10px;
}
.questions-progress {
  width: var(--page-max-width);
  max-height: 70px;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0, 0.25);
  margin: 10px 0;
  font-weight: 400;
}
.questions-progress-wrapper {
  width: 100%;
  margin: 16px;
  display: flex;
  justify-content: space-between;
}
.test-title {
  margin: 0px 5px;
  display: flex;
  align-items: center;
}
.remaining-time {
  margin: 0px 5px;
  display: flex;
  align-items: center;
}
.answered {
  margin: 0px 5px;
  display: flex;
  align-items: center;
}
.counter {
  padding: 10px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>
