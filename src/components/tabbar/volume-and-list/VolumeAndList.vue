<template>
  <div class="volume-and-list">
    <div class="volume-icon">
      <div v-if="volume < 33">
        <img src="~@/assets/img/tabbar-icon/lowVolume.svg" alt="">
      </div>
      <div v-else-if="volume < 67">
        <img src="~@/assets/img/tabbar-icon/mediumVolume.svg" alt="">
      </div>
      <div v-else>
        <img src="~@/assets/img/tabbar-icon/highVolume.svg" alt="">
      </div>
    </div>
    <div class="volume-line">
      <div class="current-volume" :style="[{'width': volume + '%'},{'background-color': $store.state.theme.baseColor}]">
      </div>
    </div>
    <div class="music-list-button">
      <div @click="musicListDispaly">
        <img src="~@/assets/img/tabbar-icon/musicList.svg" alt="">
      </div>
      <div class="music-list" :style="{'display': isDisplay}">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        volume: 80,
        isDisplay: 'none'
      }
    },
    methods: {
      musicListDispaly() {
        if (this.isDisplay == 'none') {
          this.isDisplay = 'block'
        } else {
          this.isDisplay = 'none'
        }
      }
    }
  }
</script>

<style>
  .volume-and-list {
    width: 25vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .volume-icon div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .volume-icon img {
    width: 25px;
    margin: 0 5px;
  }

  .volume-line {
    height: 4px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .current-volume {
    height: 4px;
  }

  .music-list-button div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .music-list-button img {
    width: 25px;
    margin: 0 20px 0 30px;
  }

  .music-list {
    width: 400px;
    height:79.7vh;
    position: absolute;
    bottom: 11.3vh;
    right: 0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    display: none;
  }
</style>