<template>
  <section class="">
    <div class="container">
      <div class="row">
        <div
          class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 form-center"
        >
          <form @submit.prevent="handleSubmit" class="login-form">
            <div class="img-wrapper">
              <img src="..\assets\UsersImage\icon.png" alt="" class="" />
            </div>

            <label for="nickname" class="">Имя</label>
            <input
              id="nickname"
              type="text"
              class=""
              required
              v-model="nickname"
            />

            <label for="login" class="">Email</label>
            <input id="login" type="email" class="" required v-model="email" />

            <label for="pass" class="">Пароль</label>
            <input
              id="pass"
              type="password"
              class=""
              required
              v-model="password"
            />
            <div class="button-wrapper">
              <button type="submit" class="">Зарегистрироваться</button>
            </div>
          </form>
        </div>
      </div>
    </div>
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
    if (localStorage.getItem("token") !== null) {
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
            this.$swal.fire({
              icon: "success",
              title: "Регистрация завершена",
              showConfirmButton: false,
              timer: 1300,
            });
            this.$router.push("/login");
          }
        });
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
}

.img-wrapper {
  text-align: center;
}

img {
  overflow: hidden;
  width: 80px;
  height: 80px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

input {
  border-radius: 8px;
  margin-bottom: 1rem;
  border-color: transparent;
}

.login-form {
  padding: 2rem;
  background-color: rgb(59 130 246 / 500);
  border-radius: 8px;
}

section {
  padding: 5rem 1rem;
  color: white;
}

.form-center {
  margin-left: auto;
  margin-right: auto;
}

button {
  color: white;
  background-color: transparent;
  width: 70%;
  height: 40px;
  text-align: center;
  border-radius: 8px;
  border-color: white;
  transition: 0.3s ease-in-out;
  will-change: background-color;
}

.button-wrapper {
  text-align: center;
}

@media (hover) {
  button:hover {
    background-color: rgb(117, 36, 215);
  }
}
</style>
