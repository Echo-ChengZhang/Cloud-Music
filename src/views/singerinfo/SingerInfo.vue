<template>
  <div class="singer-info">
    <div class="singer-info-title">
      <div class="singer-img">
        <img :src="detail.cover" alt="">
      </div>
      <div class="singer-main-info">
        <h2>{{detail.name}}</h2>
        <p>单曲数：{{detail.musicSize}}&nbsp&nbsp&nbsp&nbsp专辑数：{{detail.albumSize}}</p>
      </div>
    </div>
    <div class="singer-info-content">
      <router-link to="/singer-info/album">
        <div>专辑</div>
      </router-link>
      <router-link to="/singer-info/desc">
        <div>歌手详情</div>
      </router-link>
      <router-link to="/singer-info/simi-artist">
        <div>相似歌手</div>
      </router-link>
    </div>
    <div>
      <router-view v-slot="{ Component }" class="views">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
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
        detail: ''
      }
    },
    activated() {
      request({
        url: '/artist/detail',
        params: {
          id: this.$store.state.singerId
        }
      }).then((res) => {
        console.log(res.data.artist);
        this.detail = res.data.artist
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style>
  .singer-info {
    padding: 20px;
  }

  .singer-info .singer-info-title {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .singer-info .singer-info-title .singer-img img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    margin-right: 20px;
  }

  .singer-info .singer-info-title .singer-main-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  .singer-info .singer-info-content {
    margin-top: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .singer-info .singer-info-content div {
    margin: 0 40px 10px 0;
    padding-bottom: 5px;

  }

  .singer-info .singer-info-content a {
    color: #000;
    text-decoration: none;
  }

  .singer-info .singer-info-content .router-link-active div {
    border-bottom: 5px solid #000;
    font-weight: bold;
    background-color: #fff;
  }
</style>