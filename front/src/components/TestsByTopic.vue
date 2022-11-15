<template>
  <main class="tests-by-topic">
    <h2>Темы</h2>
    <div class="tests-by-topic__list">
      <div
        class="tests-by-topic__list-item"
        v-for="(topic, index) in questionsData"
        :key="topic.name"
        @click="selectTopic(index)"
      >
        {{ index + 1 }}. {{ topic.name }}
      </div>
    </div>
  </main>
</template>

<script>
import questionsData from "../assets/questionsData.json";
export default {
  name: "TestsByTopic",
  data() {
    return {
      questionsData,
    };
  },
  mounted() {
    localStorage.removeItem("userResponses");
  },
  methods: {
    selectTopic(index) {
      localStorage.setItem("topic", JSON.stringify(questionsData[index]));
      this.$router.push("/test");
    },
  },
};
</script>

<style scoped>
.tests-by-topic {
  padding: 70px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.tests-by-topic__list {
  padding: 2rem;
  width: 90%;
  border-radius: 10px;
  border: 2px solid rgb(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.tests-by-topic__list-item {
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 1rem;
  margin: 1rem;
  width: 275px;
  height: 150px;
  font-size: 100%;
  text-align: center;
  font-weight: 500;
  transition: all 0.2s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tests-by-topic__list-item:hover {
  background-color: rgb(59 130 246 / 500);
}
</style>
