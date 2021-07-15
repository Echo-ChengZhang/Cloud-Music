<template>
  <div class="playing">
    <h2>{{$store.state.currentMusicName}}</h2>
    <div class="artist">
      <span>歌手：</span>
      <router-link v-for="item in $store.state.currentMusicSinger" to="/artist">
        {{item.name}}
      </router-link>
    </div>
    <div class="album">
      <span>专辑：</span>
      <router-link to="/album">{{$store.state.currentAlbumName}}</router-link>
    </div>
    <div class="album-pic">
      <img :src="$store.state.currentMusicUrl" alt="" :style="{'transform': 'rotate(' + $store.state.rotateDeg + 'deg)'}">
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        albumInfo: {},
        currentMusicInfo: this.$store.state.currentMusicInfo
      }
    },
    activated() {
      this.$store.commit('changeSideBarStyle')
    },
    deactivated() {
      this.$store.commit('changeSideBarStyle')
    }
  }
</script>

<style>
  .playing {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .playing h2 {
    font-size: 40px;
    font-weight: normal;
    margin: 20px 0 10px;
  }

  .artist {
    margin-bottom: 10px;
  }

  .artist a {
    text-decoration: none;
    color: #000;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
  }

  .artist a:hover {
    font-weight: bold;
  }

  .album {
    margin-bottom: 10px;
  }

  .album a {
    text-decoration: none;
    color: #000;
    height: 30px;
    line-height: 30px;
    margin-right: 10px;
  }

  .album a:hover {
    font-weight: bold;
  }

  .album-pic img {
    width: 300px;
    height: 300px;
    margin: 40px;
    border-radius: 150px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  }
</style>