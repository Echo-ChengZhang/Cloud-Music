<template>
  <div class="nav-bar" :style="{'background-color':$store.state.theme.baseColor}">
    <div class="features-bar">
      <div class="logo">
        <h2>网易云音乐</h2>
        <h2>网易云音乐</h2>
      </div>
      <search></search>
    </div>
    <skin></skin>
  </div>
</template>

<script>
  import Search from './search/Search.vue'
  import Skin from './skin/Skin.vue'
  export default {
    components: {
      Search,
      Skin
    }
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
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  .features-bar {
    width: 35vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }

  .logo h2 {
    font-size: 25px;
    font-weight: bolder;
    position: absolute;
  }

  .logo h2:nth-child(1) {
    -webkit-text-stroke: #fff 0.3px;
    color: transparent;
  }

  .logo h2:nth-child(2) {
    color: #fff;
    animation: wave 3s ease-in-out infinite;
  }

  @keyframes wave {

    0%,
    100% {
      clip-path: polygon(0% 50%, 10% 60%, 20% 70%, 30% 70%, 40% 60%, 50% 50%, 60% 40%, 70% 30%, 80% 30%, 90% 40%, 100% 50%, 100% 100%, 0% 100%);
    }

    50% {
      clip-path: polygon(0% 50%, 10% 40%, 20% 30%, 30% 30%, 40% 40%, 50% 50%, 60% 60%, 70% 70%, 80% 70%, 90% 60%, 100% 50%, 100% 100%, 0% 100%);
    }
  }
</style>