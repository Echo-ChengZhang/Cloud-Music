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
        <div class="music-list-title">
          <h2>当前播放</h2>
          <p>总{{$store.state.currentMusicList.length}}首</p>
        </div>
        <div class="music-list-songs">
          <div v-for="(song, index) in $store.state.currentMusicList" :class="{'single': index % 2 == 0}" @click="playSong(song)">
            <p>{{song.name}}</p>
            <p>
              <span v-for="singer in song.ar">{{singer.name}}</span>
            </p>
          </div>
        </div>
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
      },
      playSong(item) {
        this.$store.commit('changeCurrentMusicId', item.id)
        this.$store.commit('changeCurrentMusicName', item.name)
        this.$store.commit('changeCurrentMusicSinger', item.ar)
        this.$store.commit('changeCurrentAlbumPicUrl', item.al.picUrl)
        this.$store.commit('changeCurrentAlbumName', item.al.name)
        this.$store.commit('changeCurrentAlbumId', item.al.id)
        this.$store.commit('exchangePlayStatus',true)
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

  .volume-and-list .volume-icon div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .volume-and-list .volume-icon img {
    width: 25px;
    margin: 0 5px;
  }

  .volume-and-list .volume-line {
    height: 4px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  .volume-and-list .volume-line .current-volume {
    height: 4px;
  }

  .volume-and-list .music-list-button div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .volume-and-list .music-list-button img {
    width: 25px;
    margin: 0 20px 0 30px;
  }

  .volume-and-list .music-list-button .music-list {
    width: 400px;
    height: 80vh;
    position: absolute;
    bottom: 11vh;
    right: 0;
    background-color: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
    display: none;
    cursor: default;
    overflow: auto;
  }

  .volume-and-list .music-list-button .music-list .music-list-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    position: fixed;
    background-color: #fff;
    width: 100%;
    height: 80px;
  }

  .volume-and-list .music-list-button .music-list .music-list-title h2,
  p {
    margin: 0;
  }

  .volume-and-list .music-list-button .music-list .music-list-songs {
    display: flex;
    flex-direction: column;
    margin-top: 125px;
  }

  .volume-and-list .music-list-button .music-list .music-list-songs .single {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .volume-and-list .music-list-button .music-list .music-list-songs div {
    display: flex;
    align-items: center;
    font-size: 13px;
    height: 30px;
    width: 100%;
  }

  .volume-and-list .music-list-button .music-list .music-list-songs div:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .volume-and-list .music-list-button .music-list .music-list-songs p {
    flex: 1;
    margin-left: 10px;
  }
</style>