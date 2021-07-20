<template>
  <div class="album-details">
    <div class="album-title">
      <div class="album-cover">
        <img :src="albumInfo.picUrl" alt="">
      </div>
      <div class="album-info">
        <h2><span :style="[{'color': $store.state.theme.baseColor}]">专辑</span>{{albumInfo.name}}</h2>
        <p>歌手：{{albumInfo.artist?.name}}</p>
        <p>时间：{{transDate(albumInfo.publishTime)}}</p>
      </div>
    </div>
    <div class="album-songs">
      <h2>歌曲列表</h2>
      <div class="album-song" v-for="song in albumSongs">
        <div>{{song.name}}</div>
        <div>
          <span v-for="singer in song.ar">{{singer.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    request
  } from '@/api/request'

  export default {
    data() {
      return {
        albumInfo: '',
        albumSongs: ''
      }
    },
    activated() {
      request({
        url: '/album',
        params: {
          id: this.$store.state.albumId
        }
      }).then(res => {
        console.log(res);
        this.albumInfo = res.album
        this.albumSongs = res.songs
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      transDate(time) {
        let day = new Date(time)
        let year = day.getFullYear();
        let month = day.getMonth() + 1;
        let date = day.getDate();
        return ([year, month, date].join('-'));
      }
    }
  }
</script>

<style>
  .album-details {
    padding: 20px;
  }

  .album-details .album-title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .album-details .album-title .album-cover img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .album-details .album-title .album-info span {
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 3px 6px;
    margin-right: 10px;
  }
</style>