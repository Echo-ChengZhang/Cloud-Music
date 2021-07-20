<template>
  <div class="desc">
    <p>{{desc.briefDesc}}</p>
    <div class="desc-item" v-for="item in desc.introduction">
      <h2>{{item.ti}}</h2>
      <p>{{item.txt}}</p>
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
        desc: ''
      }
    },
    activated() {
      request({
        url: '/artist/desc',
        params: {
          id: this.$store.state.singerId
        }
      }).then((res) => {
        console.log(res);
        this.desc = res
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style>
  .desc p:nth-child(1) {
    margin: 20px;
    line-height: 40px;
    white-space: pre-wrap;
  }

  .desc .desc-item {
    margin: 20px;
  }

  .desc .desc-item h2 {
    margin: 10px 0;
  }

  .desc .desc-item p {
    line-height: 40px;
    white-space: pre-wrap;
  }
</style>