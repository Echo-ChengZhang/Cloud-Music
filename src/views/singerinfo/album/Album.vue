<template>
  <div class="album">
    <div class="album-cover" v-for="item in albums" @click="toAlbum(item.id)">
      <img :src="item.picUrl" alt="">
      <p class="album-name">{{item.name}}</p>
      <p class="album-publish-time">{{transDate(item.publishTime)}}</p>
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
        console.log(res);
        this.albums = res.hotAlbums
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
      toAlbum(item) {
        this.$store.commit('changeAlbumId', item)
        this.$router.push('/album-details')
      }
    }
  }
</script>

<style>
  .album {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .album .album-cover {
    margin: 20px;
    cursor: pointer;
  }

  .album .album-cover img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
  }

  .album .album-cover .album-name {
    width: 200px;
    font-size: 15px;
    margin: 5px 0;
  }

  .album .album-cover .album-publish-time {
    font-size: 13px;
    margin: 5px 0;
    color: rgba(0, 0, 0, 0.5)
  }
</style>