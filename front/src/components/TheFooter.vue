<template>
  <footer class="footer">
    <div class="text-wrapper">
      <p>WEB - ПРОГРАММА «ЭКЗАМЕН ПДД». Все права защищены 2022</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
.footer {
  box-sizing: border-box;
  display: flex;
  margin-top: auto;
  align-items: center;
  height: 3.5rem;
  width: 100%;
  background-color: #3a3a3a;
  line-height: 1;
}

.text-wrapper {
  color: white;
  justify-items: center;
  margin: auto;
  padding: 15px;
  font-size: 15px;
  padding: 20px;
}
</style>
