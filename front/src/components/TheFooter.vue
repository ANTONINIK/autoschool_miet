<template>
  <div class="the-footer">
    <div class="text-wrapper">
      <p>Copyright © 2007-2022</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
.the-footer {
  display: flex;
  height: 80px;
  width: 100%;
  background-color: #222222;
  line-height: 1.3;
  font-family: Menlo, monospace;
}

.text-wrapper {
  color: white;
  justify-items: center;
  margin: auto;
}
</style>
