<template>
  <div class="player">
    <div class="control-button">
      <div class="control-button-item">
        <a href="#">
          <img src="~@/assets/img/icon/shangyishou.svg" alt="">
        </a>
      </div>
      <div class="control-button-item" id="play-and-pause">
        <a href="#">
          <img src="~@/assets/img/icon/bofang.svg" alt="">
        </a>
      </div>
      <div class="control-button-item">
        <a href="#">
          <img src="~@/assets/img/icon/xiayishou.svg" alt="">
        </a>
      </div>
    </div>
    <div class="progress-bar">
      这里是进度条
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .player {
    width: 50vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .control-button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control-button-item {
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 40px;
  }

  .control-button-item img {
    width: 20px;
  }

  #play-and-pause {
    background-color: rgba(0, 0, 0, 0.05);
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  #play-and-pause img {
    width: 25px;
  }
</style>