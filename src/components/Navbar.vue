<template>
    <div class="navbar">
        <div class="navbar-container">
            <div class="left">
                <div class="logo">
                    <p class="logo-text" @click="$router.push('/about')">Тесты ПДД «ЛАМАКО»</p>
                </div>
            </div>
            <div class="center">
                <div class="menu">
                    <a class="menu-item" @click="$router.push('/')">
                        Новости
                    </a>
                    <a class="menu-item" @click="$router.push('/testpage')">
                        Демо - тест
                    </a>
                </div>
            </div>
            <div class="right">
                <div class="wrapper">
                    <div class="separator"></div>
                    <div class="login">
                        <p @click="$router.push('/authorization')">Войти</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Navbar',
}

</script>

<style>
.navbar {
    width: 100%;
    max-height: 80px;
    background-color: #d65d69;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-container {
    width: var(--page-max-width);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 0px;

    font-family: 'Roboto', sans-serif;
}

.left {
    display: flex;
    justify-content: center;

    font-size: 1.25rem;
    font-weight: 400;
    user-select: none;
    cursor: pointer;
}

.logo {
    display: flex;
    align-items: center;
}

.logo-text {
    display: flex;
    padding: 20px;
    margin-left: 10px;
    color: white;
    background-color: #AFD274;
}

.center {
    display: flex;
    justify-content: center;
}

.menu {
    display: flex;
    justify-content: space-between;
}

.menu-item {
    display: flex;
    text-decoration: none;
    color: black;
    align-items: center;
    text-transform: uppercase;
    transition: color .25s;
    margin: 0px 10px;
}

.right {
    display: flex;
    justify-content: center;
}

.wrapper {
    display: flex;
    justify-content: space-around;
}

.separator {
    height: 100%;
    width: 1px;

    background-color: rgba(0, 0, 0, 0.5);

    margin: 0px 5px;
}
</style>
    