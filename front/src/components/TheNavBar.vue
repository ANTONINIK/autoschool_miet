<template>
  <header class="header">
    <nav
      class="navig"
      :class="{ showContentFalse: !showContent }"
      v-if="isActive"
    >
      <ul class="menu mb-0">
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[0] }"
          @click="selectMenu('/about')"
        >
          <a class="menu-link">Lamako</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[1] }"
          @click="selectMenu('/')"
        >
          <a class="menu-link">Новости</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[2] }"
          @click="selectMenu('/login')"
          v-if="!user"
        >
          <a class="menu-link">Войти</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[3] }"
          @click="selectMenu('/register')"
          v-if="!user"
        >
          <a class="menu-link">Регистрация</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[4] }"
          @click="selectMenu('/test')"
        >
          <a class="menu-link">Демо-тест</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[5] }"
          @click="selectMenu('/testsbytopic')"
        >
          <a class="menu-link">Тесты по темам</a>
        </li>
        <li
          class="menu-item"
          :class="{ menu_item_active: isSelected[6] }"
          @click="selectMenu('/profile')"
          v-if="user"
        >
          <a class="menu-link">Профиль</a>
        </li>
        <li class="menu-item" @click="logout" v-if="user">
          <a class="menu-link">Выйти</a>
        </li>
      </ul>
      <img src="../assets/UsersImage/icon.png" alt="" class="logo" />
    </nav>
    <div class="burger" @click="burgerClick">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TheNavBar",
  data() {
    return {
      isActive: true,
      showContent: false,
      isSelected: new Array(7).fill(false),
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, "400");
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
    burgerClick() {
      this.isActive = !this.isActive;
    },
    selectMenu(route) {
      if (this.$route.path === "/test")
        this.$swal
          .fire({
            title: "Вы уверены?",
            text: "Если вы покинете эту страницу, ваш прогресс будет потерян.",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Да, я ухожу!",
            cancelButtonText: "О нет, продолжим!",
            confirmButtonColor: "#7524D7",
            reverseButtons: true,
          })
          .then((result) => {
            if (result.isConfirmed) {
              if (route === "/test") this.$router.go("/");
              else this.$router.push(route);
            }
          });
      else this.$router.push(route);
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.isSelected.fill(false);
        if (to.fullPath === "/about") {
          this.isSelected[0] = true;
          document.title = "О нас";
        } else if (to.fullPath === "/") {
          this.isSelected[1] = true;
          document.title = "Новости";
        } else if (to.fullPath === "/login") {
          this.isSelected[2] = true;
          document.title = "Авторизация";
        } else if (to.fullPath === "/register") {
          this.isSelected[3] = true;
          document.title = "Регистрация";
        } else if (to.fullPath === "/test") {
          this.isSelected[4] = true;
          document.title = "Демо-тест";
        } else if (to.fullPath === "/testsbytopic") {
          this.isSelected[5] = true;
          document.title = "Тесты по теме";
        }
        if (to.fullPath === "/profile") {
          this.isSelected[6] = true;
          document.title = "Профиль";
        }
      },
    },
  },
};
</script>

<style scoped>
.header {
  height: 3.5rem;
  min-width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  margin: 0;
  background-color: rgb(51, 112, 212);
  z-index: 1;
}

.navig {
  display: flex;
  flex-direction: row;
  align-items: center;
  transition: all 2s ease;
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

.menu_item_active {
  background-color: rgb(0, 60, 150);
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

.burger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
  padding-left: 1rem;
  opacity: 0;
  visibility: hidden;
}
.burger .line {
  width: 2rem;
  height: 2px;
  background-color: white;
}

.active {
  opacity: 1 !important;
  visibility: visible !important;
}

/* .showContentFalse {
  transform: translateX(-94%);
} */

@media (hover) {
  .menu .menu-item:hover {
    border-color: #fff;
  }
}

@media only screen and (max-width: 1050px) {
  .menu, .logo {
    flex-direction: column;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    color: black;
  }

  .burger {
    opacity: 1;
    visibility: visible;
  }
}
</style>
