<template>
  <section id="navigation" class="container">
    <img src="../assets/UsersImage/icon.png" alt="" class="logo" />
    <nav class="navig">
      <ul class="menu mb-0">
        <li class="menu-item" @click="$router.push('/about')">
          <a class="menu-link">Lamako</a>
        </li>
        <li class="menu-item" @click="$router.push('/')">
          <a class="menu-link">Новости</a>
        </li>
        <li class="menu-item" @click="$router.push('/login')" v-if="!user">
          <a class="menu-link">Войти</a>
        </li>
        <li class="menu-item" @click="$router.push('/register')" v-if="!user">
          <a class="menu-link">Регистрация</a>
        </li>
        <li class="menu-item" @click="$router.push('/test')" v-if="user">
          <a class="menu-link">Демо-тест</a>
        </li>
        <li class="menu-item" @click="$router.push('/profile')" v-if="user">
          <a class="menu-link">Профиль</a>
        </li>
        <li class="menu-item" @click="logout" v-if="user">
          <a class="menu-link">Выйти</a>
        </li>
      </ul>
    </nav>
    <div class="burger" @click="burgerClick">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavBar",
  data(){
    return{
      isActive: false,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
    burgerClick(){
      this.isActive = !this.isActive;
    }
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style scoped>
.container {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  color: #fff;
  background-color: rgb(51, 112, 212);
}

.menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding: 1rem 0;
}

.menu .menu-item {
  margin: 0 1rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  will-change: border;
  transition: 0.3s ease-in-out;
}

.menu-link {
  padding: 1rem 0;
  margin: 0 1rem;
  text-decoration: none;
  color: white;
  font-size: 18px;
}

.logo {
  height: 45px;
  width: 45px;
  display: flex;
}

 .navigation{
  display: flex;
  position: relative;
}

.burger{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
  opacity: 0;
  visibility: hidden;
}
.burger .line{
  width: 2rem;
  height: 2px;
  background-color: white;
}

.active{
  opacity: 1 !important;
  visibility: visible !important;
}

@media (hover) {
  .menu .menu-item:hover {
    border-color: #fff;
  }
}

@media screen and (max-width: 620px) {
  .menu {
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    color:black;
  }

  .burger{
    opacity: 1;
    visibility: visible;
  }
}

section{
  position: fixed;
  top: 0;
  z-index: 900;
}
</style>
