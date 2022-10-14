<template>
  <section>
    <div class="header text-center">
      <div class="opacity-black">
        <div class="container">
          <h1>Новости</h1>
          <h3>какой-нибудь текст</h3>
        </div>
      </div>
    </div>
    <div class="about text-center">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-10 col-lg-8 ml-auto mr-auto pt-10 pb-10">
            <h2>Новости Lamako</h2>
            <p>текст</p>
          </div>
        </div>
      </div>
    </div>
    <div class="benefits pt-10 pb-10">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2 class="mb-6">Новости из мира автомобилей</h2>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h2 class="mb-6">Новости из мира автоспорта</h2>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <h2 class="mb-6">Новости внутри компании</h2>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-12">
            <div class="content-box">
              <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                  <h3>Новость 1</h3>
                  <p>Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание преимущсетва Описание
                    преимущсетва </p>
                </div>
                <div class="col-12 col-md-6 col-lg-4">
                  <img src="../assets/UsersImage/photo.jpg" alt="">
                </div>
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
  name: "News",
};
</script>

<style scoped>
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
  padding-top: 100px;
}

.benefits {
  background-color: rgba(0, 0, 0, 0.2);
}

.content-box {
  border-radius: 20px;
  transition: 0.3s ease-in-out;
  will-change: border;
  overflow: hidden;
  margin-bottom: 20px;
  background-color: #fff;
}

.content-box .row .col-12:first-child{
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 20px;
}

.img {
  max-width: 100%;
  overflow: hidden;
  object-fit: contain;
}

@media(hover) {
  .content-box:hover {
    border: 3px solid #fff;
  }
}
</style>



