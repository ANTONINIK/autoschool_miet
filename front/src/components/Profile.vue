<template>
  <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
      <div class="col-md-3 border-right">
        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            style="border-radius: 20px"
            src="../assets/UsersImage/photo.jpg"
          />
          <h1>
            <span class="fs-3">{{ user.nickname }}</span>
          </h1>
          <span class="fs-5 text-black-50">{{ user.email }}</span>
        </div>
      </div>
      <div class="col-md-5 border-right">
        <div v-if="user">
          <div class="container">
            <div id="about_user">
              <div class="flex items-center justify-center pt-5 flex-col"></div>
            </div>
            <div class="user-stats" v-if="user.results.length > 0">
              <h1 align="center">Статистика прохождения тестов</h1>
              <div
                class="questions-progress-wrapper scale"
                v-for="(userResult, index) in user.results"
                :key="index"
              >
                <div class="remaining-time">
                  <p>Дата: {{ userResult.date }}</p>
                  <p style="margin-left: 20px">Время прохождения:</p>
                  <div class="time-counter">{{ userResult.timeLeft }}</div>
                </div>
                <div class="answered">
                  <p>Количество верных ответов:</p>
                  <div class="counter">{{ userResult.score }} из 20</div>
                </div>
                <button
                  class="button"
                  style="vertical-align: middle"
                  @click="watchResult(userResult)"
                >
                  <span>показать</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "Profile",
  async created() {
    if (localStorage.getItem("token") == null) this.$router.push("login");
    await axios
      .get("user", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        this.$store.dispatch("user", response.data);
      });
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    watchResult(userResult) {
      localStorage.setItem("score", userResult.score);
      localStorage.setItem(
        "userResponses",
        JSON.stringify(userResult.userResponse)
      );
      this.$router.push("/result");
    },
  },
};
</script>

<style scoped>
.container {
  display: inline-flex;
}

.user-stats {
  padding-top: 20px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
}

.questions-progress-wrapper {
  width: 1000px;
  margin: 16px;
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.25);
}

.remaining-time {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.time-counter {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.answered {
  font-weight: 500;
  margin: 10px 20px;
  display: flex;
  align-items: center;
}

.counter {
  padding: 10px 10px 10px 18px;
  width: 100px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  font-weight: 900;
  display: flex;
  align-items: center;
  margin: 5px 20px;
}

.button {
  display: inline-block;
  border-radius: 10px;
  background-color: rgb(59 130 246 / 500);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  padding: 10px;
  width: 120px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 30px;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: "\00bb";
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.scale {
  transition: 0.3s;
}

.scale:hover {
  transform: scale(1.015);
}
</style>
