<template>
  <div class="nav-bar">
    <div class="features-bar">
      <div class="">网易云音乐</div>
      <search></search>
    </div>
    <skin></skin>
  </div>
</template>

<script>
import Search from './search/Search.vue'
import Skin from './skin/Skin.vue'
  export default {
    Search,
    Skin
  }
</script>

<style>
  .nav-bar {
    height: 9vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #55efc4;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>