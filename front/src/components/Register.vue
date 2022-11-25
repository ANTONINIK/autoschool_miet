<template>
  <main class="register container">
    <div class="row">
      <div
        class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 form-center"
      >
        <form @submit.prevent="handleSubmit" class="login-form">
          <div class="img-wrapper">
            <img src="..\assets\UsersImage\icon.png" alt="" />
          </div>

          <label for="nickname">Имя</label>
          <input id="nickname" type="text" required v-model="nickname" />

          <label for="login">Email</label>
          <input id="login" type="email" required v-model="email" />

          <label for="pass">Пароль</label>
          <input id="pass" type="password" required v-model="password" />
          <div class="button-wrapper">
            <button type="submit">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  </main>
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
  mounted() {
    if (localStorage.getItem("token") !== null) {
      this.$router.push("/");
    }
  },
  methods: {
    handleSubmit() {
      axios
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
              confirmButtonColor: "#7524D7",
              showConfirmButton: false,
              timer: 1300,
            });
            this.$router.push("/login");
          }
        })
        .catch((error) => {
          console.log(error);
          this.$router.push("/error");
        });
    },
  },
};
</script>

<style scoped>
.register {
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
  padding: 10px;
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
