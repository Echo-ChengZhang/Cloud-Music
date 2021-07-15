<template>
  <div class="recommendation">
    <h2>推荐歌单</h2>
    <div class="personalized">
      <div v-for="item in message" class="personalized-item">
        <router-link @click="musicListClick(item)" to="/music-list-details">
          <img :src="item.picUrl" alt="">
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    request
  } from '@/api/request';

  export default {
    data() {
      return {
        message: ''
      }
    },
    beforeCreate() {
      axios.all([
        request({
          url: '/personalized'
        }),
        request({
          url: '/song/detail',
          params: {
            ids: this.$store.state.currentMusicId
          }
        })
      ]).then(axios.spread((res1, res2) => {
        this.message = res1.result
        console.log(res2.songs[0]);
        this.$store.commit('changeCurrentMusicName', res2.songs[0].name)
        this.$store.commit('changeCurrentMusicUrl', res2.songs[0].al.picUrl)
        this.$store.commit('changeCurrentMusicSinger', res2.songs[0].ar)
        this.$store.commit('changeCurrentAlbumId', res2.songs[0].al.id)
        this.$store.commit('changeCurrentAlbumName', res2.songs[0].al.name)
      }))
    },
    methods: {
      musicListClick(item) {
        this.$store.commit('changeCurrentMusicListId', item.id)
      }
    }
  }
</script>

<style>
  .recommendation h2 {
    margin: 20px;
  }

  .personalized {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }

  .personalized-item {
    margin: 10px;
  }

  .personalized-item a {
    text-decoration: none;
    color: #000;
  }

  .personalized-item img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin: 10px;
  }

  .personalized-item img:hover {
    opacity: 0.8;
  }

  .personalized-item div {
    font-size: 15px;
    width: 200px;
    height: 30px;
    margin: 0 10px;
  }

  .personalized-item div:hover {
    font-weight: bold;
  }
</style>