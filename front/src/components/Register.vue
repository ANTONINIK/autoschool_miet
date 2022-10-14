<template>
  <section class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleSubmit">
      <div class="bg-white w-96 p-6 rounded shadow-sm">
        <div class="flex items-center justify-center mb-4">
          <img src="..\assets\QuestionsImage\icon.png" alt="" class="h-32" />
        </div>

        <label for="nickname" class="text-gray-700">Имя</label>
        <input
          id="nickname"
          type="text"
          class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"
          required
          v-model="nickname"
        />

        <label for="login" class="text-gray-700">Email</label>
        <input
          id="login"
          type="email"
          class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"
          required
          v-model="email"
        />

        <label for="pass" class="text-gray-700">Пароль</label>
        <input
          id="pass"
          type="password"
          class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4"
          required
          v-model="password"
        />

        <button
          type="submit"
          class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      nickname: "",
    };
  },
  created() {
    if(localStorage.getItem("token") !== null) {
      this.$router.push("/");
    }
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("register", {
          email: this.email,
          password: this.password,
          nickname: this.nickname,
        })
        .then((response) => {
          if (response.status == 200) {
            alert("Регистрация завершена");
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>

<style>
section{
  background-color: rgba(0, 0, 0, 0.2);
}
</style>
