<template>
  <section id="navigation" class="container">
    <nav>
      <ul class="menu">
        <li class="menu-item"><a class="menu-link" @click="$router.push('/about')">Lamako</a></li>
        <li class="menu-item"><a class="menu-link" @click="$router.push('/')">Новости</a></li>
        <li class="menu-item"><a class="menu-link" @click="$router.push('/testpage')">Демо-тест</a></li>
        <li class="menu-item"><a class="menu-link" @click="$router.push('/authorization')">Войти</a></li>
        <li class="menu-item"><a class="menu-link" @click="$router.push('/registration')">Регистрация</a></li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
#navigation.container{
  max-width: 100%;
}

#navigation{
  margin: 0;
  color:#fff;
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

@media(hover) {
  #navigation .menu .menu-item:hover{
    opacity: 0.5;
    text-decoration: underline;
  }
}

</style>
