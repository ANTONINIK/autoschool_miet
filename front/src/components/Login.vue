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
              <button type="submit" class="">Войти</button>
            </div>
            <div class="button-wrapper">
              <button type="submit" class="button-color">
                Создать аккаунт
              </button>
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
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
        .post("login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          if (response.status == 200) {
            localStorage.setItem("token", response.data);
            this.$router.go("/");
          }
          if (response.status == 203) {
            this.$swal.fire({
              icon: "error",
              title: "Ошибка!",
              text: "Неверный логин или пароль!",
              confirmButtonColor: "#7524D7",
            });
          }
        });
    },
  },
};
</script>

<style scoped>
section {
  height: 100vh;
  padding: 5rem 1rem;
  color: white;
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

.button-color {
  background: rgb(34, 34, 34);
}

.button-wrapper {
  text-align: center;
  padding-bottom: 20px;
}

@media (hover) {
  button:hover {
    background-color: rgb(117, 36, 215);
  }
}
</style>
