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
      <div class="album-song" v-for="(song, index) in albumSongs" :class="{'single': index % 2 == 0}">
        <div @click="toMusic(song)">{{song.name}}</div>
        <div>
          <span v-for="singer in song.ar" @click="toSinger(singer)">{{singer.name}}</span>
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
      },
      toMusic(item) {
        this.$store.commit('changeCurrentMusicId', item.id)
        this.$store.commit('changeCurrentMusicName', item.name)
        this.$store.commit('changeCurrentMusicSinger', item.ar)
        this.$store.commit('changeCurrentAlbumPicUrl', item.al.picUrl)
        this.$store.commit('changeCurrentAlbumName', item.al.name)
        this.$store.commit('changeCurrentAlbumId', item.al.id)
        this.$store.commit('exchangePlayStatus',true)
        this.$router.push('/playing')
      },
      toSinger(singer) {
        this.$store.commit('changeSingerId', singer.id)
        this.$store.commit('changeSingerInfo')
        this.$router.push('/singer-info')
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
  
  .album-details .album-songs {
    margin-top: 20px;
  }

  .album-details .album-songs h2 {
    margin: 20px 0 10px;
  }

  .album-details .album-songs .album-song {
    display: flex;
    align-items: center;
    padding: 5px 0;
    cursor: pointer;
  }

  .album-details .album-songs .album-song:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .album-details .album-songs .album-song div {
    flex: 1;
  }

  .album-details .album-songs .album-song span {
    margin-right: 20px;
  }

  .album-details .album-songs .single {
    background-color: rgba(0, 0, 0, 0.1);
  }
</style>