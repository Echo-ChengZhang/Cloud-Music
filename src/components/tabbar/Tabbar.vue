<template>
  <div class="tab-bar">
    <music-info>
      <img slot="img" src="~@/assets/img/秋绪.jpg" alt="">
      <h2 slot="song-name">秋绪</h2>
      <p slot="singer">塞壬唱片</p>
    </music-info>
    <player>

    </player>
    <volume-and-player>

    </volume-and-player>
  </div>
</template>

<script>
  import MusicInfo from './music-info/MusicInfo.vue'
  import Player from './player/Player.vue'
  import volumeAndPlayer from './volume-and-list/VolumeAndList.vue'
  export default {
    components: {
      MusicInfo,
      Player,
      volumeAndPlayer
    }
  }
</script>

<style>
  .tab-bar {
    background-color: #999;
    height: 10vh;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
  }
</style>