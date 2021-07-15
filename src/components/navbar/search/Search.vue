<template>
  <div class="search">
    <div class="backward-forward">
      <div class="backward" @click="$router.go(-1)">
        <img src="~@/assets/img/navbar-icon/last-active.svg" alt="">
      </div>
      <div class="forward" @click="$router.go(1)">
        <img src="~@/assets/img/navbar-icon/next-active.svg" alt="">
      </div>
    </div>
    <div class="input-search" :style="{'background-color': $store.state.theme.otherColor}" @mouseover="mouseOver"
      @mouseleave="mouseLeave">
      <input type="text">
      <a href="#" :style="{'background-color': $store.state.theme.colorBox}">
        <img src="~@/assets/img/navbar-icon/search.svg" alt="">
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      mouseOver() {
        this.$store.commit('changeColorBox', this.$store.state.theme.baseColor)
      },
      mouseLeave() {
        this.$store.commit('changeColorBox', this.$store.state.theme.otherColor)
      }
    }
  }
</script>

<style>
  .search {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .backward-forward {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 20px;
  }

  .backward-forward img {
    width: 20px;
    height: 20px;
  }

  .backward {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }

  .forward {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
  }

  .input-search {
    height: 30px;
    padding: 5px;
    border-radius: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .input-search input {
    background: none;
    border: none;
    outline: none;
    color: #fff;
    font-size: 14px;
    padding: 0;
    width: 0;
    transition: 1s;
  }

  .input-search a {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .input-search img {
    width: 25px;
    height: 25px;
  }

  .input-search:hover input {
    width: 10vw;
  }
</style>