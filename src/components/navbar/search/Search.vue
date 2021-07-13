<template>
  <div class="search">
    <div class="backward-forward">
      <div class="backward">
        <div v-if="!canBackward">
          <a href="#">
            <img src="~@/assets/img/navbar-icon/last.svg" alt="">
          </a>
        </div>
        <div v-else>
          <a href="#">
            <img src="~@/assets/img/navbar-icon/last-active.svg" alt="">
          </a>
        </div>
      </div>
      <div class="forward">
        <div v-if="!canForward">
          <a href="#">
            <img src="~@/assets/img/navbar-icon/next.svg" alt="">
          </a>
        </div>
        <div v-else>
          <a href="#">
            <img src="~@/assets/img/navbar-icon/next-active.svg" alt="">
          </a>
        </div>
      </div>
    </div>
    <div input-search>
      <input type="text">
      <button></button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        canBackward: false,
        canForward: false
      }
    }
  }
</script>

<style>
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .backward-forward {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .backward-forward img {
    width: 25px;
    height: 25px;
  }

    .backward {
    display: flex;
    justify-content: center;
    align-items: center;
  }

    .forward {
    display: flex;
    justify-content: center;
    align-items: center;
  }


</style>