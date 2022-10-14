<template>
  <section class="text-center">
    <div class="header">
      <div class="opacity-black">
        <div class="container">
          <h1>О нас</h1>
          <h3>информация</h3>
        </div>
      </div>
    </div>
    <div class="about">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8 ml-auto mr-auto pt-10 pb-10">
            <h2>Что такое Lamako?</h2>
            <p>ответ</p>
          </div>
        </div>
      </div>
    </div>
    <div class="benefits pt-10 pb-10">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-6">Почему вы должны выбрать нас</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Преимущество 1</h3>
              <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                преимущсетва </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Преимущество 1</h3>
              <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                преимущсетва </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Преимущество 1</h3>
              <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                преимущсетва </p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-3">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Преимущество 1</h3>
              <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                преимущсетва </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="workers pt-10 pb-10">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-6">Создатели платформы</h2>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Лаврушкин Юрий</h3>
              <p>Немного текста, описания, приколов и другой фигни</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Марьянский Антон</h3>
              <p>Немного текста, описания, приколов и другой фигни</p>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 ml-auto mr-auto">
            <div class="content-box">
              <img src="../assets/UsersImage/photo.jpg" alt="">
              <h3>Колесов Игорь</h3>
              <p>Немного текста, описания, приколов и другой фигни</p>
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

<style>
.header {
  background: url("../assets/UsersImage/car-bg.jpg");
  background-position: center center;
  height: 70vh;
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

.benefits{
  background-color: rgba(0, 0, 0, 0.2);
}
.content-box{
  padding: 0;
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: white;
}

.img{
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
  will-change: scale;
}

@media(hover){
  .content-box:hover{
    border: 3px solid #fff;
  }
}
</style>
