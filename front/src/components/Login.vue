<template>
  <section class="bg-gray-100 flex items-center justify-center h-screen">
    <form @submit.prevent="handleSubmit">
      <div class="bg-white w-96 p-6 rounded shadow-sm">
        <div class="flex items-center justify-center mb-4">
          <img src="..\assets\QuestionsImage\icon.png" alt="" class="h-32" />
        </div>

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

        <input id="RememberMe" type="checkbox" class="mb-4" />
        <label for="RememberMe" class="text-gray-700 px-1"
          >Запомнить меня</label
        >

        <button
          type="submit"
          class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Вход
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleSubmit() {
      await axios
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("token", response.data);
            this.$router.go("/")
          }
          if (response.status == 203) {
            alert("Неверный пароль или логин");
          }
        });
    },
  },
};
</script>

<style></style>
