<template>
  <div>
    这是播放页面
    <button @click="btnclick">click</button>
    <audio :src="message.url" controls></audio>
    <div>{{message}}</div>
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
    methods: {
      btnclick() {
        request({
          url: '/song/url?id=33894312'
        }).then(res => {
          this.message = res.data.data[0]
          this.$store.commit('changeCurrentMusic', this.message)
        })
      }
    }
  }
</script>

<style>

</style>