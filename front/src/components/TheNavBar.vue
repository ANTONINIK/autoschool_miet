<template>
  <section id="navigation" class="container">
    <nav>
      <ul class="menu">
        <li class="menu-item">
          <a class="menu-link" @click="$router.push('/about')">Lamako</a>
        </li>
        <li class="menu-item">
          <a class="menu-link" @click="$router.push('/')">Новости</a>
        </li>
        <li class="menu-item" v-if="!user">
          <a class="menu-link" @click="$router.push('/login')">Войти</a>
        </li>
        <li class="menu-item" v-if="!user">
          <a class="menu-link" @click="$router.push('/register')"
            >Регистрация</a
          >
        </li>
        <li class="menu-item" v-if="user">
          <a class="menu-link" @click="$router.push('/test')">Демо-тест</a>
        </li>
        <li class="menu-item" v-if="user">
          <a class="menu-link" @click="$router.push('/profile')">Профиль</a>
        </li>
        <li class="menu-item" v-if="user">
          <a class="menu-link" @click="logout">Выйти</a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavBar",
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    },
  },

  computed: {
    ...mapGetters(["user"]),
  },
};
</script>

<style>
#navigation.container {
  max-width: 100%;
}

#navigation {
  margin: 0;
  color: #fff;
  background-color: rgb(59 130 246 / 500);
}

#navigation .menu {
  display: flex;
  flex-direction: row;
  list-style-type: none;
}

#navigation .menu .menu-item {
  padding: 1rem 0;
  margin: 0 1rem;
  cursor: pointer;
}

@media (hover) {
  #navigation .menu .menu-item:hover {
    opacity: 0.5;
    text-decoration: underline;
  }
}
</style>
