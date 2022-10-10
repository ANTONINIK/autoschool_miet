<template>
  <section class="bg-gray-100 flex items-center justify-center h-screen">
    <form>
      <div class="bg-white w-96 p-6 rounded shadow-sm">
        <div class="flex items-center justify-center mb-4">
          <img src="..\assets\img\icon.png" alt="" class="h-32">
        </div>
        
        <label for="name" class="text-gray-700">Имя</label>
        <input id="name" type="text" class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">

        <label for="sername" class="text-gray-700">Фамилия</label>
        <input id="sername" type="text" class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">

        <label for="login" class="text-gray-700">Email</label>
        <input id="login" type="email" class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">
        
        <label for="pass1" class="text-gray-700">Пароль</label>
        <input id="pass1" type="password" class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">

        <label for="pass2" class="text-gray-700">Повторите пароль</label>
        <input id="pass2" type="password" class="w-full py-2 bg-gray-100 text-gray-500 px-1 outline-none mb-4">

        <button type="submit" class="bg-blue-500 w-full text-gray-100 py-2 rounded hover:bg-blue-600 transition-colors">Зарегистрироваться</button>

      </div>
    </form>
  </section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async handleSubmit() {
      await axios.post('register',{
        email: this.email,
        password: this.password,
      });
      this.$router.push('/authorization');
    },
  },
};
</script>

<style></style>
