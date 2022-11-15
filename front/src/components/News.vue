<template>
  <main>
    <div class="header text-center">
      <div class="opacity-black">
        <div class="container">
          <h1>Для доступа к тестам необходима регистрация на сайте</h1>
        </div>
      </div>
    </div>
    <div class="about text-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8" style="margin: auto">
            <h2>Закон и ПДД</h2>
            <p>{{ new Date().toLocaleDateString("en-GB") }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="news pt-10 pb-10">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    О снижении скорости в обход нештрафуемых +20 км/ч рассказали
                    в регионах
                  </h3>
                  <p>
                    О практике устанавливать в городе ограничение скорости в 40
                    км/ч рассказали в Татарстане. Так власти обходят
                    нештрафуемый порог +20 км/ч. В Москве такой подход начали
                    применять в центре и на съездах с магистралей
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/1.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    На дорогах появились инспекторы ВАИ. Какие у них полномочия
                  </h3>
                  <p>
                    На необычных дорожных инспекторов ВАИ обратили внимание
                    водители: служащие похожи на сотрудников ГИБДД и также
                    останавливают автомобили. Разбираемся, в чем разница, что
                    они проверяют и могут ли штрафовать
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/2.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    Средняя скорость, повышение тарифов, быстрые дороги: что
                    ждет водителей
                  </h3>
                  <p>
                    ГИБДД, дорожники и эксперты в области развития
                    интеллектуальных систем рассказали о планах и назвали
                    главные предложения, которые в ближайшее время отразятся на
                    всех водителях. Все подробности
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/3.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    Водителей предупредили о штрафах за езду с затертыми
                    номерами
                  </h3>
                  <p>
                    О серьезных проблемах с ГИБДД предупредили юристы
                    автомобилистов, которые ездят на автомобилях с затертыми
                    номерами. Так водители делают, чтобы скрыться от камер, но
                    такой прием несет большие риски: от штрафов до лишения
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    Эксперт по ПДД потребовал вернуть штрафы за среднюю скорость
                  </h3>
                  <p>
                    О росте аварийности после отмены фиксации превышения средней
                    скорости при помощи камер заявил экс-начальник Управления
                    ГИБДД МВД по Татарстану Рифкат Минниханов. Он призвал ГИБДД
                    вернуться к этой практике
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-10" style="margin: auto">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>
                    Как накажут за непропуск скорой. В ГИБДД всё объяснили
                  </h3>
                  <p>
                    За непропуск машин экстренных служб недобросовестных
                    автомобилистов ждут крупные денежные штрафы и лишение прав
                  </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/6.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "News",
};
</script>

<style scoped>
.container {
  padding: 3rem 1rem;
}
.header {
  background: url("../assets/UsersImage/news.jpg") no-repeat;
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

.news {
  background-color: rgb(59 130 246 / 500);
}

.content-box {
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  will-change: border;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;
  border: 3px solid black;
}

.content-box .row .col-12:first-child {
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
}

.img {
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
}

@media (hover) {
  .content-box:hover {
    border: 3px solid rgb(117, 36, 215);
    transform: scale(1.015);
  }
}
</style>
