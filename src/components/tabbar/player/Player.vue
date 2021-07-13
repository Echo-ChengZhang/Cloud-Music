<template>
  <div class="player">
    <div class="control-button">
      <div class="control-button-item">
        <a href="#">
          <img src="~@/assets/img/tabbar-icon/previous.svg" alt="">
        </a>
      </div>
      <div class="control-button-item" id="play-and-pause" @click="itemClick">
        <div v-if="!isPlaying">
          <a href="#">
            <img src="~@/assets/img/tabbar-icon/play.svg" alt="">
          </a>
        </div>
        <div v-else>
          <a href="#">
            <img src="~@/assets/img/tabbar-icon/pause.svg" alt="">
          </a>
        </div>
      </div>
      <div class="control-button-item">
        <a href="#">
          <img src="~@/assets/img/tabbar-icon/next.svg" alt="">
        </a>
      </div>
    </div>
    <div class="progress-bar">
      <div class="current-time">00:00</div>
      <div class="progress-line">
        <div class="current-line" :class="{'playing':isPlaying}" :style="{'background': 'repeating-linear-gradient(45deg, #fff 0px, #fff 5px, ' + this.$store.state.theme.baseColor + ' 6px, ' + this.$store.state.theme.baseColor + ' 10px)'}">
          <div class="current-point"></div>
        </div>
      </div>
      <div class="total-time">23:33</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isPlaying: false
      }
    },
    methods: {
      itemClick() {
        this.isPlaying = !this.isPlaying
      }
    }
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
    height: 30px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 30px;
  }

  .control-button-item a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .control-button-item img {
    width: 20px;
    height: 20px;
  }

  #play-and-pause {
    background-color: rgba(0, 0, 0, 0.05);
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }

  #play-and-pause:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  #play-and-pause img {
    width: 25px;
    height: 25px;
  }

  .progress-bar {
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
  }

  .progress-line {
    height: 6px;
    width: 30vw;
    background-color: rgba(0, 0, 0, 0.1);
    margin: 0 10px;
    border-radius: 3px;
    position: relative;
  }

  .current-line {
    height: 6px;
    width: 50%;
    border-radius: 3px;
    background-size: 14px 6px;
    background-position: 0 0;
  }

  .playing {
    animation: grow 1s linear infinite;
  }

  @keyframes grow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 14px 0;
    }
  }

  .current-point {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 1px rgba(0, 0, 0, 0.6);
    position: absolute;
    top: -2px;
    left: 50%;
  }
</style>