<template>
  <div class="tab-bar">
    <music-info>
      <template v-slot:img>
        <img :src="$store.state.currentAlbumPicUrl" alt="">
      </template>
      <template v-slot:song-name>
        <h2>{{$store.state.currentMusicName}}</h2>
      </template>
      <template v-slot:singer>
        <span v-for="item in $store.state.currentMusicSinger">{{item.name}}</span>
      </template>
    </music-info>
    <player/>
    <volume-and-player/>
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
    height: 11vh;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>