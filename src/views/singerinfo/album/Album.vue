<template>
  <div class="album">
    <div class="album-item" v-for="item in albums">
      <div class="album-cover">
        <img :src="item.picUrl" alt="">
        <p>{{item.publishTime}}</p>
      </div>
      <div class="album-songs">
        <h2 class="album-name">{{item.name}}</h2>
        <div class="album-songs-item">
          <div v-for="albumSong in albumSongs(item)">{{albumSong.name}}</div>
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
        albums: ''
      }
    },
    activated() {
      request({
        url: '/artist/album',
        params: {
          id: this.$store.state.singerId
        }
      }).then((res) => {
        console.log(res.hotAlbums);
        this.albums = res.hotAlbums
      }).catch(err => {
        console.log(err);
      })
    },
    methods: {
      albumSongs(item) {
        request({
        url: '/album',
        params: {
          id: item.id
        }
      }).then((res) => {
        console.log(res.songs);
        return res.songs
      }).catch(err => {
        console.log(err);
      })
      }
    }
  }
</script>

<style>
  .album .album-item {
    margin-top: 20px;
    display: flex;
  }

  .album .album-item .album-cover img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
  }
</style>