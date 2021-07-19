<template>
  <div class="singer-info">
    singer info
  </div>
</template>

<script>
  import {
    request
  } from '@/api/request'

  export default {
    activated() {
      request({
        url: '/artist/detail',
        params: {
          id: this.$store.state.singerId
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    }
  }
</script>

<style>

</style>