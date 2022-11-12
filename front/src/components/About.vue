<template>
  <section class="text-center">
    <div class="header">
      <div class="opacity-black">
        <div class="container">
          <h1>LAMAKO</h1>
          <h3>WEB - ПРОГРАММА «ЭКЗАМЕН ПДД»</h3>
        </div>
      </div>
    </div>
    <div class="about pb-16">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8" style="margin: auto">
            <h2>Что такое LAMAKO?</h2>
            <p>Сервис, предоставляющий возможность подготовки к экзамену ПДД</p>
          </div>
        </div>
      </div>
    </div>
    <div class="benefits">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-6">Почему вы должны выбрать нас</h2>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="content-box">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="img-wrapper">
                      <img src="../assets/UsersImage/advantage1.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-8">
                    <div class="text-wrapper">
                      <h3>Быстрый и удобный способ подготовиться к экзамену</h3>
                      <p>
                        Есть возможность изучить билеты по темам или попробовать
                        пройти экзамен
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="content-box">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="img-wrapper">
                      <img src="../assets/UsersImage/advantage2.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-8">
                    <div class="text-wrapper">
                      <h3>Обработка ваших ошибок с выдачей рекомендаций</h3>
                      <p>
                        В профиле вы можете посмотреть какие темы вам даются
                        хорошо, и на какие лучше обратить внимание
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="content-box">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="img-wrapper">
                      <img src="../assets/UsersImage/advantage3.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-8">
                    <div class="text-wrapper">
                      <h3>Следим за изменениями в правилах</h3>
                      <p>
                        Наша команда постоянно следит за всеми обновлениями в
                        порядке проведения теоретического и практического
                        экзамена
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4">
            <div class="content-box">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-md-4">
                    <div class="img-wrapper">
                      <img src="../assets/UsersImage/advantage4.jpg" alt="" />
                    </div>
                  </div>
                  <div class="col-12 col-md-8">
                    <div class="text-wrapper">
                      <h3>Сохранение результатов экзамена в профиле</h3>
                      <p>
                        Результаты каждой попытки записаваются в профиль, чтобы
                        Вы могли удобно анализировать свои ошибки
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="workers">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-6">Создатели платформы</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="content-box">
              <div class="img-wrapper">
                <img src="../assets/UsersImage/yuriy.jpg" alt="" />
              </div>
              <div class="text-wrapper">
                <h3>Лаврушкин Юрий</h3>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="content-box">
              <div class="img-wrapper">
                <img src="../assets/UsersImage/anton.jpg" alt="" />
              </div>
              <div class="text-wrapper">
                <h3>Марьянский Антон</h3>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 mb-4" style="margin: auto">
            <div class="content-box">
              <div class="img-wrapper">
                <img src="../assets/UsersImage/igor.jpg" alt="" />
              </div>
              <div class="text-wrapper">
                <h3>Колесов Игорь</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
.container {
  padding: 3rem 1rem;
}

.content-box .container {
  padding: 0;
}

.header {
  background: url("../assets/UsersImage/about.jpg") no-repeat;
  background-position: center center;
  height: 45vh;
  position: relative;
}

.opacity-black {
  position: absolute;
  inset: 0;
  width: 100%;
  height: inherit;
  z-index: 0;
  background-color: rgba(0, 0, 0, 0.6);
}

.opacity-black .container {
  color: white;
  padding-top: 100px;
}

.benefits {
  background-color: rgb(59 130 246 / 500);
  color: white;
}

.content-box {
  padding: 0;
  border-radius: 20px;
  transition: 0.5s ease-in-out;
  overflow: hidden;
  background-color: white;
  height: 100%;
  border: 3px solid black;
  will-change: border-color;
  display: flex;
  flex-direction: row;
  color: black;
}

.workers .content-box {
  flex-direction: column;
}

.img-wrapper {
  height: 100%;
  max-width: 100%;
  width: 100%;
  margin: auto;
}

.text-wrapper {
  padding: 10px;
  color: black;
}

.workers .text-wrapper {
  padding-top: 1rem;
}

@media (hover) {
  .content-box:hover {
    border-color: rgb(117, 36, 215);
  }
}

@media screen and (max-width: 991px) {
  .benefits .content-box {
    flex-direction: column;
  }
}
</style>
