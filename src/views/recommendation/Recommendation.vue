<template>
  <div class="recommendation">
    <h2>推荐歌单</h2>
    <div class="personalized">
      <div v-for="item in message" class="personalized-item">
        <router-link to="/playing">
          <img :src="item.picUrl" alt="">
          <div>{{item.name}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
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
      request({
        url: '/personalized'
      }).then(res => {
        console.log(res.data.result);
        this.message = res.data.result
      })
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